#!/usr/bin/env ruby -I ../lib -I lib
require 'sinatra/base'
require 'sinatra/json'
require 'sinatra/cross_origin'
require 'icalendar/recurrence'
require 'icalendar/tzinfo'
require 'json'
require 'net/http'
require 'date'

TIMEZONE = ENV['TIMEZONE'] || ENV['TZ'] || 'Europe/London'
ICAL_URL = ENV['ICAL_URL']
BRIGHTNESS_STEP = 25
BRIGHTNESS_MIN = BRIGHTNESS_STEP
BRIGHTNESS_MAX = 250
BRIGHTNESS_LOW = (BRIGHTNESS_MAX / 2).round
BRIGHTNESS_TWEEN = 0.5
BRIGHTNESS_TWEEN_LONG = BRIGHTNESS_TWEEN * 3

class Screen
  class << self
    def get_brightness
      file = File.open("brightness")
      file_data = file.read

      Integer(file_data)
    end

    def update_brightness(new_brightness)
      File.open("brightness", "w") { |f| f.write "#{new_brightness}" }
    end

    def brightness_percentage(brightness = Screen.get_brightness)
      Integer((brightness / BRIGHTNESS_MAX.to_f) * 100)
    end

    def get_backlight_status
      file = File.open("bl_power")
      file_data = file.read

      Integer(file_data) == 0 ? :on : :off
    end

    def backlight_on
      return if Screen.get_backlight_status == :on

      File.open("bl_power", "w") { |f| f.write "0" }
    end

    def backlight_off
      return if Screen.get_backlight_status == :on

      File.open("bl_power", "w") { |f| f.write "1" }
    end
  end
end

class MeetingDisplay < Sinatra::Base
  raise StandardError, "No iCal URL set" unless ICAL_URL

  Time.zone = TIMEZONE

  set :bind, '0.0.0.0'
  set :port, ENV['PORT'] || 5000
  set :app_file, __FILE__
  set :logging, true

  configure do
    enable :cross_origin
  end

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get('/') do
    uri = URI(ICAL_URL)
    cal_file = Net::HTTP.get(uri)

    # Parser returns an array of calendars because a single file
    # can have multiple calendars.
    cals = Icalendar::Calendar.parse(cal_file)
    cal = cals.first

    now = DateTime.now
    today = DateTime.new(now.year, now.month, now.day, 0, 0, 0)
    next_month = today.next_month
    next_month = DateTime.new(next_month.year, next_month.month, next_month.day, 23, 59, 59)

    events = cal.events.select{ |event| event.transp == 'OPAQUE' }.map do |event|
      event.occurrences_between(now, next_month).map do |event_occurrence|
        {
            uid: event.uid,
            summary: event.summary,
            start: event_occurrence.start_time.in_time_zone(TIMEZONE),
            end: event_occurrence.end_time.in_time_zone(TIMEZONE)
        }
      end
    end

    now = DateTime.now
    sorted_filtered_events = events
        .flatten
        .select { |event| event[:end] > now  } # Only include events that end after now
        .uniq { |event| [event[:uid], event[:start]] } # Remove duplicates that can exist in some implementations of repeating
        .sort_by{ |event| [event[:start], event[:end]] } # Sort them

    response_object = {
        events: sorted_filtered_events,
        time_zone: TIMEZONE
    }

    json response_object
  end

  get('/brightness') do
    percentage = Screen.brightness_percentage(Screen.get_brightness)
    backlight_on = Screen.get_backlight_status == :on

    response_object = { brightness: percentage, backlight_on: backlight_on }
    json response_object
  end

  get('/brightness/up') do
    current_brightness = Screen.get_brightness
    new_brightness = current_brightness + BRIGHTNESS_STEP
    new_brightness = BRIGHTNESS_MAX if new_brightness > BRIGHTNESS_MAX

    Screen.backlight_on
    Screen.update_brightness(new_brightness)
    percentage = Screen.brightness_percentage(Screen.get_brightness)
    backlight_on = Screen.get_backlight_status == :on

    response_object = { brightness: percentage, backlight_on: backlight_on }
    json response_object
  end

  get('/brightness/down') do
    current_brightness = Screen.get_brightness
    new_brightness = current_brightness - BRIGHTNESS_STEP
    if new_brightness < BRIGHTNESS_MIN
      new_brightness = BRIGHTNESS_MIN
      Screen.backlight_off
    end

    Screen.update_brightness(new_brightness)

    percentage = Screen.brightness_percentage(Screen.get_brightness)
    backlight_on = Screen.get_backlight_status == :on

    response_object = { brightness: percentage, backlight_on: backlight_on }
    json response_object
  end

  get('/brightness/ping') do
    backlight_on = Screen.get_backlight_status == :on
    brightness = Screen.get_brightness

    if backlight_on
      percentage = Screen.brightness_percentage(brightness)
      response_object = { backlight_on: backlight_on, brightness: percentage }
      json response_object
    else
      Screen.backlight_on
      Screen.update_brightness(BRIGHTNESS_LOW) if brightness < BRIGHTNESS_LOW

      backlight_on = Screen.get_backlight_status == :on
      percentage = Screen.brightness_percentage(Screen.get_brightness)

      response_object = { backlight_on: backlight_on, brightness: percentage }
      json response_object
    end
  end

  get('/brightness/off') do
    frames = 30
    target_brightness = 10
    step = (Screen.get_brightness - target_brightness).round / (frames * BRIGHTNESS_TWEEN_LONG).round
    step = 1 if step < 1

    while Screen.get_brightness > target_brightness do
      new_brightness = (Screen.get_brightness - step).round
      new_brightness = target_brightness if new_brightness < target_brightness

      Screen.update_brightness(new_brightness)

      Kernel.sleep(1.0/frames)
    end
    Screen.backlight_off

    backlight_on = Screen.get_backlight_status == :on
    percentage = Screen.brightness_percentage(Screen.get_brightness)

    response_object = { backlight_on: backlight_on, brightness: percentage }
    json response_object
  end

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  run! if app_file == $0
end

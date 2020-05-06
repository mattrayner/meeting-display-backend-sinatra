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
# ENV['TZ'] = TIMEZONE
ICAL_URL = ENV['ICAL_URL']

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

  options "*" do
    response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
    response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
    response.headers["Access-Control-Allow-Origin"] = "*"
    200
  end

  run! if app_file == $0
end

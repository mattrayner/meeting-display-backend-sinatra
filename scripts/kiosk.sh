#!/bin/bash
# Update the docker image
docker pull mattrayner/meeting-display:latest

# Re-set permissions for backlight
sudo chmod 777 /sys/class/backlight/rpi_backlight/brightness
sudo chmod 777 /sys/class/backlight/rpi_backlight/bl_power

# Launch the backend service
docker-compose -f /home/pi/meeting-display/docker-compose.meeting-display.yml up -d

# Run this script in display 0 - the monitor
export DISPLAY=:0

# Hide the mouse from the display
unclutter &

# If Chrome crashes (usually due to rebooting), clear the crash flag so we don't have the annoying warning bar
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

# Run Chromium and open tabs
#
# NOTE: --check-fo-update-interval is set as a workaround. The raspbian chromium will often be older than the
# main chromium branch. We update nightly so can we assured we are running the latest available, but sometimes
# a pop up will appear asking you to download a new version.
/usr/bin/chromium-browser --check-for-update-interval=604800 --no-first-run --no-default-browser-check --window-size=800,480 --kiosk --window-position=0,0 http://localhost:4567/index.html &

# Start the kiosk loop. This keystroke changes the Chromium tab
# To have just anti-idle, use this line instead:
# xdotool keydown ctrl; xdotool keyup ctrl;
# Otherwise, the ctrl+Tab is designed to switch tabs in Chrome
# xdotool keydown ctrl+Tab; xdotool keyup ctrl+Tab;
# #
while (true)
 do
  xdotool keydown ctrl; xdotool keyup ctrl;
  sleep 15
done
EOT
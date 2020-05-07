```bash
echo "Install Docker and Docker Compose"
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
sudo apt-get install -y libffi-dev libssl-dev
sudo apt-get install -y python3 python3-pip
sudo apt-get remove python-configparser
sudo pip3 install docker-compose

echo "Configuring chromium in kiosk mode"
mkdir -p /home/pi/.config/autostart/
cat <<EOT > /home/pi/.config/autostart/kiosk.desktop
[Desktop Entry]
Type=Application
Name=Kiosk
Exec=/home/pi/kiosk.sh
X-GNOME-Autostart-enabled=true
EOT

cat <<EOT > ~/kiosk.sh
#!/bin/bash

# Update the docker image
docker pull mattrayner/meeting-display:latest

# Re-set permissions for backlight
sudo chmod 777 /sys/class/backlight/rpi_backlight/brightness
sudo chmod 777 /sys/class/backlight/rpi_backlight/bl_power

# Launch the backend service
docker-compose -f ~/docker-compose.meeting-display.yml up -d

# Run this script in display 0 - the monitor
export DISPLAY=:0

# Hide the mouse from the display
unclutter &

# If Chrome crashes (usually due to rebooting), clear the crash flag so we don't have the annoying warning bar
sed -i 's/"exited_cleanly":false/"exited_cleanly":true/' /home/pi/.config/chromium/Default/Preferences
sed -i 's/"exit_type":"Crashed"/"exit_type":"Normal"/' /home/pi/.config/chromium/Default/Preferences

# Run Chromium and open tabs
/usr/bin/chromium-browser --window-size=800,480 --kiosk --window-position=0,0 http://localhost:4567/index.html &

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

chmod +x ~/kiosk.sh

echo "Configuring docker-compose"
echo "Paste in your .ical URL, then press enter:
read ical_url
echo "export ICAL_URL=$ical_url" >> ~/.bashrc 
source ~/.bashrc

cat >~/docker-compose.meeting-display.yml <<EOT
version: '3.8'
services:
  app:
    image: mattrayner/meeting-display:latest
    ports:
      - '4567:5000'
    volumes:
      - /sys/class/backlight/rpi_backlight/brightness:/home/meetingdisplay/brightness
      - /sys/class/backlight/rpi_backlight/bl_power:/home/meetingdisplay/bl_power
    environment:
      ICAL_URL:
EOT

echo "Set permissions to allow the display to change the brightness and backlight"
sudo chmod 777 /sys/class/backlight/rpi_backlight/brightness
sudo chmod 777 /sys/class/backlight/rpi_backlight/bl_power

echo "Set the screen to sleep from 19:00 to 07:00 but stay on the rest of the time"
sudo chmod 777 /etc/xdg/lxsession/LXDE-pi/autostart
sudo cat <<EOT >> /etc/xdg/lxsession/LXDE-pi/autostart
@xset s off
@xset -dpms
EOT

cat <<EOT > ~/display_off.sh
#!/bin/bash
echo "1" > /sys/class/backlight/rpi_backlight/bl_power
echo "0" > /sys/class/backlight/rpi_backlight/brightness
EOT

cat <<EOT > ~/display_on_dim.sh
#!/bin/bash
echo "0" > /sys/class/backlight/rpi_backlight/bl_power
echo "62" > /sys/class/backlight/rpi_backlight/brightness
EOT

cat <<EOT > ~/display_on.sh
#!/bin/bash
echo "0" > /sys/class/backlight/rpi_backlight/bl_power
echo "125" > /sys/class/backlight/rpi_backlight/brightness
EOT

cat <<EOT > ~/meeting_display_auto_brightness
0 7,20 * * 0-5 root /home/pi/display_on_dim.sh >/dev/null 2>&1
30 7 * * 0-5 root /bin/sh /home/pi/display_on.sh
* 21 * * * root /bin/sh /home/pi/display_off.sh
EOT

if [ -f "/etc/cron.d/meeting_display_auto_brightness" ]; then
    sudo rm /etc/cron.d/meeting_display_auto_brightness
fi
sudo mv ~/meeting_display_auto_brightness /etc/cron.d/meeting_display_auto_brightness

echo "Complete. Now restart with 'sudo reboot now'. Note that you should have SSH setup so that you can manage the pi after this."
```

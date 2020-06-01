mkdir -p ~/meeting-display

echo "Setting up display configuration"
sudo cat <<EOT >> /boot/config.txt
lcd_rotate=2
framebuffer_width=800
framebuffer_height=444
framebuffer_aspect=-1
EOT

echo "Get the latest packages and update"
sudo apt-get update -y
sudo apt-get upgrade -y

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
Exec=/home/pi/meeting-display/kiosk.sh
X-GNOME-Autostart-enabled=true
EOT

curl https://matt.rayner.io/meeting-display/kiosk.sh --output ~/meeting-display/kiosk.sh
chmod +x ~/kiosk.sh

echo "Configuring docker-compose"
echo "Paste in your .ical URL, then press enter:"
read ical_url
echo "export ICAL_URL=$ical_url" >> ~/.bashrc
source ~/.bashrc

# Add the brightness and bl_power files into the docker file so we can manipulate the touch screen brightness.
curl https://matt.rayner.io/meeting-display/docker-compose.meeting-display.yml --output ~/meeting-display/docker-compose.meeting-display.yml

echo "Set permissions to allow the display to change the brightness and backlight"
sudo chmod 777 /sys/class/backlight/rpi_backlight/brightness
sudo chmod 777 /sys/class/backlight/rpi_backlight/bl_power

echo "Set the screen to sleep from 19:00 to 07:00 but stay on the rest of the time"
# Add some software to allow us to hide the cursor and prevent the pi from going to sleep
sudo apt-get install -y unclutter xdotool

# Disable screen auto-dimming
sudo chmod 777 /etc/xdg/lxsession/LXDE-pi/autostart
sudo cat <<EOT >> /etc/xdg/lxsession/LXDE-pi/autostart
@xset s off
@xset -dpms
EOT

# Create cron scripts
mkdir -p ~/meeting-display/cron/

# Allow us to turn the display off on a schedule
curl https://matt.rayner.io/meeting-display/cron/display_off.sh --output ~/meeting-display/cron/display_off.sh
chmod +x ~/meeting-display/cron/display_off.sh

# Allow us to dim the display on a schedule
curl https://matt.rayner.io/meeting-display/cron/display_on_dim.sh --output ~/meeting-display/cron/display_on_dim.sh
chmod +x ~/meeting-display/cron/display_on_dim.sh

# Allow us to turn the display on on a schedule
curl https://matt.rayner.io/meeting-display/cron/display_on.sh --output ~/meeting-display/cron/display_on.sh
chmod +x ~/meeting-display/cron/display_on.sh

# Allow us to automatically update the display on a schedule
curl https://matt.rayner.io/meeting-display/cron/update.sh --output ~/meeting-display/cron/update.sh
chmod +x ~/meeting-display/cron/update.sh


mkdir -p ~/meeting-display/logs

# Add CRON entries to do the above
( crontab -l | grep -v -F "/home/pi/meeting-display/cron/update.sh" ; echo "30 1 * * 0-5 /home/pi/meeting-display/cron/update.sh > /home/pi/meeting-display/logs/cron.log 2>&1" ) | crontab -
( crontab -l | grep -v -F "/home/pi/display_on_dim.sh" ; echo "0 7,20 * * 0-5 /home/pi/display_on_dim.sh > /home/pi/cron.log 2>&1" ) | crontab -
( crontab -l | grep -v -F "/home/pi/display_on.sh" ; echo "30 7 * * 0-5 /bin/sh /home/pi/display_on.sh > /home/pi/cron.log 2>&1" ) | crontab -
( crontab -l | grep -v -F "/home/pi/display_off.sh" ; echo "0 21 * * * /bin/sh /home/pi/display_off.sh > /home/pi/cron.log 2>&1" ) | crontab -

echo "Complete. Now restart with 'sudo reboot now'. Note that you should have SSH setup so that you can manage the pi after this."

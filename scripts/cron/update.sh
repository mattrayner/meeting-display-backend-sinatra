#!/bin/bash
sudo apt-get update -y
sudo apt-get upgrade -y
sudo killall chromium-browse
docker-compose -f /home/pi/meeting-display/docker-compose.meeting-display.yml stop
docker-compose -f /home/pi/meeting-display/docker-compose.meeting-display.yml rm -f
/home/pi/meeting-display/kiosk.sh

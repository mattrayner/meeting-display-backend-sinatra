#!/bin/bash
echo "0" > /sys/class/backlight/rpi_backlight/bl_power
echo "125" > /sys/class/backlight/rpi_backlight/brightness

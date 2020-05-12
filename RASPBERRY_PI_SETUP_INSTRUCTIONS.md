## Hardware requirements
* Raspberry pi (tested on 3B+)
* Official raspberry pi touch screen
* Official touch screen display

## Software requirements
The latest version of Raspbian on a memory card, an A2 micro sd card is recommended.

## Installation instructions
* Change your default password (you should do this regardless)
* Setup SSH on your raspberry pi
* First grab you .ical url.
    * **Google Calendar** Calendar Options > Settings & Sharing > Secret address in ical format
    * **Office 365** Share your calendar to a seperate email address. The email sent to that address will include an ical link.
* Next, on a new install of Raspbian, run the following:

```bash
curl https://matt.rayner.io/meeting-display/setup.sh | sh
```

Let the setup script prepare your environment, then restart when prompted.

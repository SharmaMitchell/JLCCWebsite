# JLCC (Japanese Language & Culture Club) Website
![JLCC-Site-Landing2](https://user-images.githubusercontent.com/90817905/162598425-0ab06e6c-8369-49dc-a817-96b972e3c695.png)
Website for the Japanese Language & Culture Club at the University of Houston. Built using HTML, CSS, and Javascript.

# Main Features
- Landing page featuring:
  - 'About Us' summary
  - Two soonest upcoming events
    - Pulled from Google Sheets database via API (see Implementation Section)
  - Club officers (Names, Roles)
    - Pulled from Officers.js
  - Membership info & payment link
  - Community info & links
- Events page featuring:
  - All upcoming events
  - All previous events

# Implementation
- Events (Implemented an events database using Google Sheets, populating events on the site via API)
  - Allows club leadership to easily update events on the website, without programming
  - Google Sheet with event info (title, summary, location, date & time, image)
    - Script automatically sorting events into separate "Archive" & "Upcoming" events, based on date
    - Automatic date formatting & default image (coffee cup placeholder)
  - Site pulls events via Google Sheets API
    - Home page: two first events in 'Upcoming' page
    - Events page: All populated rows from 'Upcoming' & 'Archive' pages
    - (JS scripts filling in info & pushing HTML code to events sections)
      - e.g. document.getElementsByClassName().innerHTML += *HTML code w/ filled in info from Sheets API*
- Officers
  - Info & image URLs stored in officerList.js
- Everything else is normal HTML/CSS, plus JS for the hamburger menu

# Upcoming Features
- Payment system
  - Implement a system for club members to pay dues on the site, possibly with Stripe or a similar service
- Expanded event details/definitions
  - Google Maps directions to event locations (when applicable, only for in-person events)
  - Longer event descriptions to allow for more info/details
- Gallery page
  - Images from previous events & gatherings
- Resources Page
  - Reccomended resources to level up your Japanese
    - Dictionaries
    - Beginner & Intermediate studying/practicing tools
    - JLPT preperation resources

# JLCC (Japanese Language & Culture Club) Website
Website for the Japanese Language & Culture Club at the University of Houston. Built using HTML, CSS, and Javascript.

# Main Features
- Landing page featuring:
  - 'About Us' summary
  - Two soonest upcoming events
  - Club officers (Names, Roles)
  - Membership info & payment link
  - Community info & links
- Events page featuring:
  - All upcoming events
  - All previous events

# Implementation
- Events
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

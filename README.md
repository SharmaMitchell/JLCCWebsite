# JLCC (Japanese Language & Culture Club) Website
![JLCC-Site-Landing3](https://user-images.githubusercontent.com/90817905/216711687-cf6ea21d-ec3d-4f4f-ba47-4efcaf65a886.png)
Website for the Japanese Language & Culture Club at the University of Houston. Built using HTML, CSS, and Javascript.

# Main Features
- Landing page featuring:
  - 'About Us' summary
  - Two soonest upcoming events
    - Pulled from Google Sheets database via API (see Implementation Section)
  - Club officers (Names, Roles)
    - Pulled from Google Sheets database via API
  - Membership info & payment link
  - Community info & links
- Events page featuring:
  - All upcoming events
  - All previous events
- Officers page featuring:
  - Info on all current officers ("about me" bio, social media, etc.)
  - Officers from previous semesters

# Implementation
![JLCC-Site-Events-DB-2](https://user-images.githubusercontent.com/90817905/180591604-85489e5f-a744-46b2-a428-dacb319b35d4.png)
- Events (Implemented an events database using Google Sheets, populating events on the site via API)
  - Allows club leadership to easily update events on the website, without programming
  - Google Sheet with event info (title, summary, location, date & time, image)
    - Script automatically sorting events into separate "Archive" & "Upcoming" events, based on date
    - Automatic date formatting & default image (coffee cup placeholder)
  - Site pulls events via Google Sheets API
    - Home page: two first events in 'Upcoming' page
    - Events page: All populated rows from 'Upcoming' & 'Archive' pages
- Officers
  - Similarly to events, officer data is stored on Google Sheets for easy-access to organization leadership

# Upcoming Features
- Payment system
  - Implement a system for club members to pay dues on the site, possibly with Stripe or a similar service
- Gallery page
  - Images from previous events & gatherings
- Resources Page
  - Reccomended resources to level up your Japanese
    - Dictionaries
    - Beginner & Intermediate studying/practicing tools
    - JLPT preperation resources

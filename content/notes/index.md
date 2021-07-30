---
title: Ideas for future updates
linktitle: "Notes"
date: 2021-07-30T06:22:01+01:00
headless: false
draft: false
type: 
longlat: false
description:
weight:
---

*NB When this page is set to `headless: true` it appears in the main menu above only from this page. See [the docs](https://gohugo.io/content-management/page-bundles/#headless-bundle)*

## Basic heirarchy

Region > Area > Crag > (topos)

So the menu item on the second cragnav menu is for the area.

## Menu's

The main menu is areas: 
- peak
- yorkshire
- N Wales
- S Wales
- South Coast (or devon & dorset)
- Scotland

Other site sections or pages: 

- **home pag**e
- **about** - could go on the home page
- **updates & news** - could go on the home page
- blog, more of the above. A blog section could be used for everything else. Some things could be 'sticky' at the top like *How to Contribute*. They could also be directly linked to the home page, the footer etc.
- **contact** - link in footer and elsewhere
- **how to contribute**
- **5000 route list**
- **bolt fund**
- **Harpur Hill and other guides** - shop?
- **Notes** - a hidden section for reference (like this page).

## Drop down menus

The main regions could then acces the different areas directly. This is important since the addition of areas means an extra click to reach a crag. How would this work on mobile touch screens? Touch once for the dropdown and touch again to get the regional page?


### Types of page

The main kind of pages are these. Though that doesn't mean they need separate templates. Adding the `section` and `type` as `<body>` classes might be helpful at some point.

1. Region
2. Area
3. Crag
4. Topo

## Maps and map pages?

Maps can be easily added to pages from the frontmatter, so easy in fact it might be good to have a map for every crag. However this would be more bandwidth and slower download times (Is there a limit to map requests from Leaflet.js?). Might be better to have a specific map/approach/getting there page for this?

## Search bar

Fairly high priority, users expect this and a quick way to look for a crag.

Algolia, Duckduckgo embedded in an iframe, 

## CMS

How hard is it to self host Netlify CMS? Then have unlimited users.

Can we use multiple CMS's? Might be confusing?

How much does it cost to add users? How much hosting cost with Netlify? How much with Cloudflare?

## Change Name

Could change the name to Sport Climbs .co.uk. This is more commonly used so if someone cannot remember the name this is more likely to be searched for. Could use both, at least for a couple of years


## Graphs with number of routes

Each crag home page has a graph listing the number of route in 

    5s, low 6s, hi 6s, lo 7s, hi 7s, lo 8s, hi 8s, lo 9s

This could be stored in a frontmatter array: `gradegraph: [0, 0, 3, 6, 10, 10, 1, 2]`

## Open Source

Invite other climbers to contribute. If UKC can get volunteers then surely we can get volunteers for a non-profit site.

Contribute info via a form and/or email. For more tech savvy use GitHub. For some a CMS / CMS's


## Images

Automate image sizing using Hugo and a shortcode using `srcset`. For this to work images need be either in a *page bundle* or stored in the `resources/assets/img` folder.

A main page image could be added to the frontmatter: `pageimage: charlton-chestwig-on-revelations`

Topo images could be added using a naming convention like `hh-racetrack-topo-1.jpg`. If stored in a leaf bundle it should be possible to easily. Or, in a leaf bundle they would just be called `topo-1.jpg` etc. though this would give no info about the file. Info could be stored in meta data

## Route grade and description

The whole route could be set in a a grid box with the following elements:

- Route name
- grade
- stars
- year
- description
- first ascentionist

This could be stored in a data file with same path as page plus `topo-1`, `topo-2` etc..

This would not be too hard to set up but a lot of work to change everything over. Volunteers ?

## Weather app

Embed a weather app to every area or crag page. The area covered would need to be stated, perhaps in the frontmatter, otherwise using the section name.

`weather: millers dale`

## Add premade info boxes

Add pre set warnings through the frontmatter.

`nesting: April 1st to 25 June`

`loose: Caution some loose rock on the top of routes 10, 11 and 12`

`rebolted: [June 21, Gary Gibson]`

## Add BMC information

Can this be accessed directly? Via an API or how?

## Better responsive menu system

Add a JS sliding type of menu from a hamburger. Though this might be too much for the regional links, considering most people will be looking for a crag immediately (another click).

## PWA's

Make each crag a downloadable progressive web app, so they can be accessed offline.
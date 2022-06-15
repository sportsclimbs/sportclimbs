---
title: "Uploadcare"
date: 2021-12-03T21:06:47Z
draft: false
type: 
longlat: false
description:
weight:
---

## Adaptive delivery

To use adaptive delivery you need to:

1. Add some Uploadcare JS to the `<head>`
2. Make images use `<img data-blink-src="..." >`
3. Make these absolute urls.
4. Will work locally as long as everything is set up right. The images need to be online though so uploadcare can access them and download them.


The only images that can work are one's installed on this site and in markdown files. That's because these are the only image tags with the `data-blink-src` code. These are changed using the  `/layouts/_markup/render-image.html` file. 

Had some initial problems getting this to work. The mistake I made was linking to the JS file using a relative path rather than a relative/permanent url : `/js/uploadcare.js` -- Duh!

Seems to work well though so far as this site is not responsive it's not ideal for trying it out.


## Hugo

To make this work you will need to use Hugo's [render hooks](https://gohugo.io/templates/render-hooks/#render-hooks-for-headings-links-and-images).

Make a file called `render-image.html` and place in a folder in `layouts/_default/_markup`.

On this site there is also a folder `layouts/adaptive/_markup` with it's own `render-image.html`. To use this just add `type: adaptive` to the page's frontmatter and images will be rendered as set here, more or less nomral.
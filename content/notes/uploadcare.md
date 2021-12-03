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
3. Possibly make these absolute urls
4. Be online rather than local maybe????


The only images that can work are one's installed on this site and in markdown files. That's because these are the only image tags with the `data-blink-src` code. These are changed using the  `/layouts/_markup/render-image.html` file. 

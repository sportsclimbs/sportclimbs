## Questions

Should I use leaf bundles for pages. Each crag needs (mostly) several pages. Each crag needs a folder which will be a branch bundle with a `_index.md` file. Under that each page could be a leaf bundle. Will this method be worse for CMS[1]?

A different solution might be `static/images/peak/harpur_hill` or maybe `assets/images/peak/harpur_hill`.

## To do

1. How to range through a branch bundle / this seems to work `range .CurrentSection.Pages`  but doesn't include the _index page from the _index page.
2. Related content? Needs to be working for crags nearby menu. Or just tag crags and list the tags or add an area to frontmatter and `range .Pages where "area" "stoney"`


## Types of page

1. Home page - uses index.html, should be a _Branch Bundle_ so how to have several content files? [2]
2. region page (peak / S Wales / N Wales / Yorkshire / Dorset?) uses `type: region` for _region_ template.
3. area page (cheedale, stoney, Matlock, Buxton etc.) uses `type: area` to uses _area_ template.
4. crag section page with intro, access etc. uses `type: crag` to filter list pages in the updates section (and skip the area pages.)
5. crag map page (not always)
6. crag topo page/s

## Problem

Trying to use data for the map coords

> failed to load data: "T:\HTML-extras\sportclimbs-hugo-1\data\map\coordinates.yml:2:1": failed to unmarshal YAML: yaml: line 2: mapping values are not allowed in this context

## Links

1. [Nested sections](https://discourse.gohugo.io/t/fixed-nested-sections-dont-seem-to-render-with-range-pages/7083)
2. [Load Multiple content files into single page](https://discourse.gohugo.io/t/load-multiple-content-files-in-a-single-template/2566)


## Refs

[1]https://github.com/netlify/netlify-cms/issues/513
[2]https://discourse.gohugo.io/t/any-home-for-headless-page-bundles/26980
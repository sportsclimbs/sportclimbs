---
title: CMS Notes
---
To use the CMS locally you only have to do two things:

1. Add the line `local_backend: true` at a top level to your `admin/config.yml` file.
2. Run `npx netlify-cms-proxy-server` from the root of your project BEFORE then running Hugo server (in another terminal obviously).

Note with the current settings the only pages to show up are markdown files. So with many pages in HTML they're not appearing.

NB.2 You can edit the CMS's config file while the server is running. It won't update immediately upon save. However if you exit the CMS and go back to the main site then go back to the CMS it should have updated.

## Collection fields

The collection field appear to be two kinds:

1. A field from the page's frontmatter.
2. The content of the page in markdown.

By default field are *required*. That means the page can't be saved (published) unless they are filled in. To change this you just add 

```yaml
required: false
```
to the list of options in your field.
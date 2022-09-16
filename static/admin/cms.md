# Notes on the CMS

## Github

The site is running on Github so has github code in the config file.

## Configuration

The CMS has several `config.yml` files. The default is `admin/config.yml`. Different ones can be set in the `<head>` section of the `admin/index.html` file.

```html
<link href="minimal.yml" type="text/yaml" rel="cms-config-url">
```

## Run locally

1. Add the line `local_backend: true` to the config.yml file.
2. Open a terminal window and type `npx netlify-cms-proxy-server` or use the alias `ncps`.
3. Start the hugo server `hugo server -D`
4. Go to localhost:1313/admin

NB. **Don't forget** to comment out the `local_backend` line before uploading to Github.

## General

1. The CMS must have markdown files only.
2. For this site the markdown files must be in markdown rather than html.
3. The date of the lastmod of files *may* have to be later than the date the CMS was set up.
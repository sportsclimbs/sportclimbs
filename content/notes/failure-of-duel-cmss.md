---
title: Failure of duel CMS's
linktitle: Duel CMS's
date: 2021-11-25T12:21:36.452Z
---
So I tried using two Netlify CMS's located in different folders: *admin* and *steve*.

These work on a local machine but only *admin* works when live online. So possibly some use when trying out things locally but otherwise not.

This would have allowed for different collections for different people and also two different media libraries: uploadcare and cloudinary.

## What works:

What does work is using different config files. You can use a different config file and set it in the `<head>` section of the CMS.

```html
<link href="minimal.yml" type="text/yaml" rel="cms-config-url">
```

Another issue with the CMS is starting a new line.

Here 1 carriage return (in the Rich Text environment) begins a new paragraph instead of a new line. You can start a new line in the Markdown environment: 2 spaces at the end of a line followed by 1 carriage return.

If I do this in markdown\
What happens in Rich Text?

> This is a blockquote.
>
> but no new line.
>
> `This is a code block from the rich text menu`
>
> Which is different to using an inserted one from the drop down....
>
> ```
> Here you get a huge choice of languages etc..
> ```
>
> But such things are not much use to Sport Climbs.
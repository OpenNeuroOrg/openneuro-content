Instance specific content and configurations. This repo contains content for the main OpenNeuro.org instance.

# Example edits

## Theme

You can override theme variables in `theme.json` like so:

```json
{
  "--primary": "palevioletred",
  "--secondary": "periwinkle",
  "--font-family-open": "'Comic Sans MS', Papyrus"
}
```

## Content

Content is specific to the components displaying it.

`front-page.json`:

```json
{
  "title": "My OpenNeuro"
}
```

## Images

Specify the path for images within this repo. When image data is loaded, the server will translate it to the git object hash to allow for cache busting.

```json
{
  "logo": "images/logo.png"
}
```

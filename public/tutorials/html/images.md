## Images in HTML

Images are an essential part of modern web pages. The `<img>` tag is used to embed images into your HTML content.

Unlike most tags, `<img>` is a **self-closing** tag — it doesn't have a closing pair like `</img>`.

---

### Basic Syntax

```html
<img src="path/to/image.jpg" alt="Image description">
```

- `src` — Specifies the path to the image file (can be a URL or local file)
- `alt` — Alternate text that appears if the image can't load. Also helps with accessibility and SEO

---

### Example

```html
<img src="logo.png" alt="Company Logo">
```

---

### Width and Height

You can set the size of the image using either HTML attributes or CSS.

#### Using HTML attributes:

```html
<img src="logo.png" alt="Logo" width="200" height="100">
```

> Note: This resizes the image but **does not preserve aspect ratio** if only one value is given.

---

### Responsive Images (Best Practice)

For flexible layouts, it's better to control the image size via CSS:

```html
<img src="photo.jpg" alt="Responsive Photo" style="max-width: 100%; height: auto;">
```

- `max-width: 100%` - Prevents the image from overflowing its container
- `height: auto` - Maintains the aspect ratio

This makes your image **responsive**, adapting to different screen sizes.

---

### Tips

- Always include the `alt` attribute - it’s important for users who use screen readers.
- Use descriptive filenames for images (`team-photo.jpg` instead of `img1.jpg`).
- Optimize images for web - large image files slow down the page.
- Use modern formats like WebP or AVIF for better performance (when supported).

---

## Full Example: Image Showcase

Here’s an example with multiple images and attributes applied:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Images in HTML</title>
</head>
<body>

  <h2>Basic Image</h2>
  <img src="wmd.svg" alt="Basic example">

  <h2>Image with Size</h2>
  <img src="wmd.svg" alt="Sized Logo" width="500" height="100">

  <h2>Responsive Image</h2>
  <img src="wmd.svg" alt="Responsive Example" style="max-width: 100%; height: auto;">

</body>
</html>

```
![Links and Anchors Example](src/assets/images/html/images_1.png)
---

## Summary

- Use `<img>` to add images.
- Set `src` for the file and `alt` for description.
- Control size with `width` and `height`, or use CSS for responsiveness.
- Optimize your images for performance and accessibility.

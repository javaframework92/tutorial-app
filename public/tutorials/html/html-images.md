## HTML Images

To put image on web page, we use the `<img>` element. Unlike most of the tags, `<img>` tag cannot have closing/ending tag and cannot have any child content that is called [void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element).

It requires two attributes:  
- `src`: contains the path/URL of the image.  
- `alt`: alternate text for the image, useful when the image cannot be displayed. Also helps with accessibility and [SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

Other attributes  
- `height`: Specify height of the image.
- `width`: Specify width of the image.
- `title`: To provide metadata or information about image if required. The `title` text will display on mouse hover, this gives us a tooltip.
- `style`: You can use `style` attribute to put inline style. 

### HTML Image Syntax

```html
<img 
  src="image path" 
  alt="alternate text for image" 
  height="200" 
  width="200" 
/>
```

### Insert Image

You can insert an image using `<img>` tag with `src` attribute.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML Images </title>
  </head>
  <body>
    <img 
      src="wmd_image.png" 
      alt="web media docs" 
    />
  </body>
</html> 
```

### Add `height` and `width` attributes

You can control width and height of image by using `width` and `height` attributes.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML Images </title>
  </head>
  <body>
    <img 
      src="wmd_image.png" 
      alt="web media docs" 
      height="200" 
      width="200" 
    />
  </body>
</html> 
```

### Add inline style

You can add inline style by using `style` attribute. It is useful when you want to add more styles on image.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML Images </title>
  </head>
  <body>
    <img 
      src="wmd_image.png" 
      alt="web media docs" 
      height="200px" 
      width="200px" 
      style="border:2px solid purple; border-radius:0.5rem; padding: 0.25rem" 
    />
  </body>
</html> 
```

### Add `border` attribute

You can add border around image by using `border` attribute. You can increase and descrease thickness of border by setting the border value like `border="1"` and 0 means no thikness.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML Images </title>
  </head>
  <body>
    <img 
      src="wmd_image.png" 
      alt="web media docs" 
      height="200px" 
      width="200px" 
      border="1"
    />
  </body>
</html> 
```

**Note:** If you want to increase the border thickness, increase the border value like `border="5"`.


### Align Image

You can align image `left`, `center` and `right` by using `align` attribute. By default the image is aligned at left.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML Images </title>
  </head>
  <body>
    <img 
      src="wmd_image.png" 
      alt="web media docs" 
      height="200px" 
      width="200px" 
      border="1"
      align="right"
    />
  </body>
</html> 
```

`align` attribute is deprecated in HTML5 and should be avoided for modern web development. Use CSS to align image is **recommnded** approach.

### Responsive Image

You can make the images responsive. Responsive images automatically adjust the size based on the devices screen size and this helps to improve performance across different devices.

Here are a few methods to achieve this:

#### 1. Using CSS:

This is a common way to make images responsive through CSS.

#### Example

```html
<!DOCTYPE html>
<html>
  <head>
      <title> HTML Images </title>
  </head>
  <body>
      <img src="wmd-image.jpg" alt="Description of image" style="max-width: 100%; height: auto;" />
  </body>
</html>
```
	
- `max-width: 100%` ensures the image never exceeds the width of its container.
- `height: auto` maintains the image’s aspect ratio.

#### 2. Using the `<picture>` element 

This helps you to display different image in different size or resolution.

#### Example

```html
<picture>
  <source srcset="large-image.jpg" media="(min-width: 800px)">
  <source srcset="small-image.jpg" media="(max-width: 799px)">
  <img src="default-image.jpg" alt="Responsive Image">
</picture>
```

- The `srcset` attribute is required, and defines the path of the image.
- The `media` attribute is optional, and accepts the media queries.
- The `<img>` element for browsers that do not support the `<picture>` element.


### Tips

- Always include the `alt` attribute - it’s important for users who use screen readers.
- Use descriptive filenames for images (`team-photo.jpg` instead of `img1.jpg`).
- Optimize images for web - large image files slow down the page.
- Use modern formats like WebP or AVIF for better performance (when supported).

### Summary

- Use `<img>` to add images.Add commentMore actions
- Set `src` for the file and `alt` for description.
- Control size with `width` and `height`, or use CSS for responsiveness.
- Optimize your images for performance and accessibility.

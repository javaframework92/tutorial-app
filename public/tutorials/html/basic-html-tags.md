## Basic HTML Tags

Now that you understand what [HTML](html?topic=introduction) is, let’s go over its building blocks — the tags.

HTML tags define how content should appear and behave in the browser. Most of the tags come in pairs: an opening tag and a closing tag.

Example:

```html
<p>This is a paragraph.</p>
```

Below are the most commonly used HTML tags, grouped by purpose.

### Headings (`<h1>` to `<h6>`)

`<h1>` to `<h6>` tags are used to define headings and subheadings on a page.

- `<h1>` is the most important (largest)
- `<h6>` is the least important (smallest)

```html
<h1>Main Title</h1>
<h2>Subsection</h2>
```

### Paragraphs (`<p>`)

Defines a block of text as a paragraph.

```html
<p>This is a paragraph of text.</p>
```

### Line Break (`<br>`)

Forces a line break without starting a new paragraph.

```html
<p>First line<br/>Second line</p>
```

### Horizontal Rule (`<hr>`)

Creates a horizontal divider between sections.

```html
<hr/>
```

### Text Formatting Tags

Used to change how text appears:

- `<strong>` — Bold and important
- `<em>` — Emphasized (italic)
- `<u>` — Underlined
- `<mark>` — Highlighted
- `<code>` — Inline code
- `<pre>` — Preformatted block (preserves spacing)

```html
<p><strong>Bold</strong> and <em>italic</em> text</p>
<p><u>Underlined</u> and <mark>highlighted</mark></p>
<p><code>console.log("Hello")</code></p>
```

### Lists (`<ul>`, `<ol>`, `<li>`)

Used to create bullet and numbered lists.

- `<ul>` — Unordered list
- `<ol>` — Ordered list
- `<li>` — List item

```html
<ul>
  <li>Milk</li>
  <li>Bread</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>
```

### Links (`<a>`)

Defines a hyperlink.

```html
<a href="https://example.com">Visit Site</a>
```

### Images (`<img>`)

Displays an image on the page.

- `src` — Image URL or file path
- `alt` — Alternate text (for accessibility)

```html
<img src="logo.png" alt="Company Logo">
```

### Tables (`<table>`, `<tr>`, `<th>`, `<td>`)

Used to display data in rows and columns.

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>25</td>
  </tr>
</table>
```

### Forms (`<form>`, `<input>`, `<textarea>`, `<button>`)

Used to collect user input.

```html
<form>
  <label>Name:</label>
  <input type="text" name="name"><br>
  
  <label>Message:</label>
  <textarea name="message"></textarea><br>
  
  <button type="submit">Send</button>
</form>
```

### Semantic Layout Tags

These tags help organize the page and give structure to the layout.

- `<header>` — Top section
- `<footer>` — Bottom section
- `<main>` — Main content area
- `<section>` — Logical page sections
- `<article>` — Standalone content
- `<nav>` — Navigation links
- `<aside>` — Sidebar content

```html
<header><h1>Site Name</h1></header>
<main>
  <section>
    <h2>About</h2>
    <p>This is the about section.</p>
  </section>
</main>
<footer>&copy; 2025</footer>
```

## Full Example: Basic HTML Page

Here is a complete HTML example using many of the tags from above. This can be previewed in a browser or shown as a screenshot on your tutorial site.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Basics</title>
</head>
<body>

  <header>
    <h1>Welcome to HTML Basics</h1>
    <p>Learn how web pages are built step by step.</p>
    <hr>
  </header>

  <main>

    <section>
      <h2>Text Formatting</h2>
      <p>This is a <strong>bold</strong>, <em>italic</em>, and <u>underlined</u> sentence.</p>
      <p>Also includes <mark>highlighted</mark> and <code>inline code</code>.</p>
    </section>

    <section>
      <h2>List Example</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </section>

    <section>
      <h2>Image and Link</h2>
      <p>Visit the <a href="https://example.com" target="_blank" rel="noopener noreferrer">official website</a>.</p>
      <img src="logo.png" alt="Logo" width="150">
    </section>

    <section>
      <h2>Table Example</h2>
      <table border="1">
        <tr>
          <th>Technology</th>
          <th>Purpose</th>
        </tr>
        <tr>
          <td>HTML</td>
          <td>Structure</td>
        </tr>
        <tr>
          <td>CSS</td>
          <td>Styling</td>
        </tr>
      </table>
    </section>

    <section>
      <h2>Contact Form</h2>
      <form>
        <label>Name:</label><br>
        <input type="text" name="name"><br><br>

        <label>Message:</label><br>
        <textarea name="message"></textarea><br><br>

        <button type="submit">Send</button>
      </form>
    </section>

  </main>

  <footer>
    <p>&copy; 2025 HTML Tutorial</p>
  </footer>

</body>
</html>
```

##### Output
![Basic HTML Tags Example](src/assets/images/html/basic_html_tag_1.png)


## Summary

This section introduced the core HTML tags used for text, layout, links, lists, forms, and more. These are the foundational elements you’ll reuse across every project.


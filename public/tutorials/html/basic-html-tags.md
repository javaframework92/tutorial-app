## Basic HTML Tags
Welcome! Now that you've got a feel for what HTML is, it's time to learn the actual building blocks: **HTML tags**. These tags tell the browser how to structure and display your content.

Let’s explore the most commonly used tags, grouped by category.

---

### 1. Text & Headings

These tags help you format the text on your page.

- `<h1>` to `<h6>` - Used for headings. `<h1>` is the biggest (main heading), and `<h6>` is the smallest.
- `<p>` - Defines a paragraph. Great for blocks of text.
- `<br>` - Adds a line break (like pressing Enter).
- `<hr>` - Creates a horizontal line, useful for separating content.

**Example:**

```html
<h1>Welcome to My Site</h1>
<p>This is a paragraph of text.</p>
<hr>
```

---

### 2. Text Formatting

Want to make text bold, italic, or underlined? These tags are your tools.

- `<strong>` - Bold text, and also tells search engines it's important.
- `<em>` - Italic text with emphasis.
- `<u>` - Underlined text.
- `<mark>` - Highlights text.
- `<code>` - Shows code in a monospace font.
- `<pre>` - Preserves formatting and spaces.

**Example:**

```html
<p><strong>Important:</strong> Save your work often!</p>
<p><em>This is emphasized text.</em></p>
```

---

### 3. Links and Navigation

Links are the heart of the web. Here's how to create them.

- `<a href="URL">` - Creates a clickable link.
  - Attributes: `target="_blank"`, `title=""`, `rel=""`

**Example:**

```html
<a href="https://example.com" target="_blank">Visit Example</a>
```

---

### 4. Images and Media

Want to add images, videos, or audio? Use these tags.

- `<img src="..." alt="...">` - Adds an image. Use alt attribute to add alternate texts which is shown when image does not loads.
- `<video>` and `<audio>` - Add media players.
- `<source>` - Used inside `<video>` or `<audio>` for multiple file options.

**Example:**

```html
<img src="logo.png" alt="Website Logo" width="200">
```

---

### 5. Lists

Great for menus, to-do lists, or item collections.

- `<ul>` - Unordered list (bullets).
- `<ol>` - Ordered list (numbers).
- `<li>` - List item.

**Example:**

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

---

### 6. Tables

For displaying data in rows and columns.

- `<table>` - Creates a table.
- `<tr>` - Table row.
- `<th>` - Table header.
- `<td>` - Table cell.

**Example:**

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Amit</td>
    <td>21</td>
  </tr>
</table>
```

---

### 7. Forms and Inputs

To collect data from users (like login, contact forms, etc.).

- `<form>` - Wraps all form inputs.
- `<input>` - Text field, checkbox, radio button, etc.
- `<textarea>` - Multi-line input.
- `<button>` - Clickable button.
- `<select>` & `<option>` - Dropdown list.

**Example:**

```html
<form>
  <label>Name:</label>
  <input type="text" name="username">
  <button type="submit">Submit</button>
</form>
```

---

### 8. Layout and Structure

Used to organize your content into sections.

- `<div>` - Generic block-level container.
- `<span>` - Generic inline container.
- `<header>`, `<footer>` - Top and bottom of a page.
- `<section>`, `<article>`, `<aside>`, `<nav>` - Semantic containers for better structure.
- `<main>` - The central content of the page.

**Example:**

```html
<main>
  <section>
    <h2>About Me</h2>
    <p>This is the main content area.</p>
  </section>
</main>
```

---

### 9. Page Setup and Metadata

These tags go inside the `<head>` of your HTML document.

- `<!DOCTYPE html>` - Declares HTML5 version.
- `<html>` - Root of your document.
- `<head>` - Meta info like title, character set, etc.
- `<title>` - Title shown on browser tab.
- `<meta>` - Info like description, author, etc.
- `<link>` - Connects external CSS files.
- `<style>` - Internal CSS.
- `<script>` - JavaScript code.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Page</title>
</head>
<body>
  <p>Hello world!</p>
</body>
</html>
```

---

### 10. Extra Useful Tags
Some extra goodies for interactive or visual content.

- `<iframe>` - Embed another page (like YouTube).
- `<noscript>` - Content shown if JavaScript is disabled.
- `<canvas>` - Used for drawing.
- `<svg>` - Scalable vector graphics.
- `<details>` and `<summary>` - Expandable/collapsible content.
- `<progress>` - Shows task progress.
- `<meter>` - Displays a measurement.
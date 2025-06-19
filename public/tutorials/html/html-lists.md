## Lists in HTML

Lists are used to group related items together in a readable format. HTML supports two main types of lists: **ordered** and **unordered**, both made up of **list items**.

---

### Ordered List (`<ol>`)

An ordered list displays items in a numbered sequence.

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

- The browser automatically numbers the items.
- Great for step-by-step instructions.

---

### Unordered List (`<ul>`)

An unordered list uses bullet points instead of numbers.

```html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>
```

- Use this for items where the order doesn’t matter.

---

### List Item (`<li>`)

Each item in a list is wrapped inside a `<li>` tag. You must use `<li>` inside either `<ul>` or `<ol>` — it can’t be used on its own.

```html
<li>This is a list item</li>
```

---

### Nested Lists

You can place one list inside another to create a hierarchy.

```html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Mango</li>
    </ul>
  </li>
  <li>Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

- Nesting is useful for categories with sub-items.
- The inner list should be placed inside a `<li>` of the outer list.

---

### Tips and Mistakes to Avoid

- Don’t place content directly inside `<ul>` or `<ol>` without using `<li>` - it won't render properly.
- Avoid using too many nested levels unless necessary - it becomes hard to read and maintain.
- Add proper indentation for readability, especially in nested lists.
- Always close your list tags — forgetting to close `<li>` or `<ul>` can break the structure of your page.

---

## Full Example: Ordered, Unordered, and Nested Lists

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Lists</title>
</head>
<body>

  <h1>Types of Lists</h1>

  <h2>Ordered List</h2>
  <ol>
    <li>Register</li>
    <li>Login</li>
    <li>Start Learning</li>
  </ol>

  <h2>Unordered List</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h2>Nested List</h2>
  <ul>
    <li>Frontend
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
    </li>
    <li>Backend
      <ul>
        <li>Node.js</li>
        <li>PHP</li>
      </ul>
    </li>
  </ul>

</body>
</html>
```
### Output
![Links and Anchors Example](src/assets/images/html/html_list_example_1.png)

## Summary

- Use `<ol>` for numbered lists and `<ul>` for bullet lists.
- Always wrap list content inside `<li>` tags.
- Nest lists inside `<li>` for subcategories.
- Keep your lists clean and readable to avoid confusion.

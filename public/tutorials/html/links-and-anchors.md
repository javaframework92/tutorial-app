## Links and Anchors

One of the core features of the web is linking — jumping from one page to another. Whether you're navigating to another site or jumping to a specific section on the same page, you’ll use the `<a>` tag.

Let’s walk through how it works.

---

### Creating a Basic Link

To create a simple hyperlink, use the `<a>` tag with the `href` attribute.

**Syntax:**

```html
<a href="https://example.com">Visit Example</a>
```

- `href` stands for "Hypertext REFerence"
- Whatever URL you pass inside `href` is where the link will go when clicked
- The text between the tags is what the user sees and clicks

---

### Opening Links in a New Tab

Sometimes, you want a link to open in a new browser tab or window. To do that, use the `target` attribute.

- `target="_blank"` — Opens the link in a **new tab**
- `target="_self"` — Opens in the **same tab** (default behavior)
- `target="_parent"` or `_top` — Used in frames or embedded documents

**Example:**

```html
<a href="https://example.com" target="_blank">Open in New Tab</a>
```
#### Output 
![Links Example](src/assets/images/html/link_and_anchor_1.png)
**Tip:** For external links, it's a good idea to use `_blank` so users don’t lose their place on your site.

---

### Adding a Tooltip with the Title Attribute

Want to show extra info when the user hovers over a link? Use the `title` attribute.

```html
<a href="https://example.com" title="Go to Example website">Hover over me</a>
```

---

### Linking to a Specific Section (Internal Anchors)

You can also use links to jump to a section within the same page. This is especially useful for long pages like tutorials, FAQs, or docs.

**Step 1:** Give the target element an `id`

```html
<h2 id="contact">Contact Us</h2>
```

**Step 2:** Link to that `id` using a hash (`#`) symbol

```html
<a href="#contact">Go to Contact Section</a>
```

Clicking this link will scroll directly to the section with the ID `contact`.

---

### Linking to an Email or Phone Number

You can also make links that open the user's default email client or dialer.

- **Email:**

```html
<a href="mailto:hello@example.com">Email Us</a>
```

- **Phone:**

```html
<a href="tel:+911234567890">Call Us</a>
```

---

## Summary

- Use `<a href="...">` to create clickable links
- Use `target="_blank"` to open links in a new tab
- Use `#idName` for internal page navigation
- You can also create email and phone links using `mailto:` and `tel:`
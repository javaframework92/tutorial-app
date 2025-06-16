## Links and Anchors

Links allow users to navigate between pages, download files, send emails, or jump to sections on the same page. In HTML, links are created using the `<a>` (anchor) tag.

### Basic Syntax

```html
<a href="https://example.com">Visit Example</a>
```

- `href` — Specifies the URL or location to navigate to.
- Text between the tags becomes the clickable link.

### Opening Links in a New Tab

Use the `target="_blank"` attribute to open links in a new browser tab.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Open in New Tab</a>
```

#### Why use `rel="noopener noreferrer"`?

- `noopener` — Prevents the new tab from accessing the page that opened it using JavaScript (`window.opener`), which improves security.
- `noreferrer` — Hides the referring page URL from the destination site, offering privacy. It also implicitly includes `noopener`.

> Always use both `noopener` and `noreferrer` for external links opened in a new tab.

### Email and Phone Links

You can create clickable email and phone links using `mailto:` and `tel:`.

```html
<a href="mailto:hello@example.com">Email Us</a>
<a href="tel:+911234567890">Call Us</a>
```

 These links open the default email app or dialer on compatible devices.

### Download Links

The `download` attribute prompts a file download when the link is clicked.

```html
<a href="image.jpg" download>Download Image</a>
```

The browser will download the file instead of opening it.

You can also speicify a value for `download` attribute, which will be a new filename of the downloaded file but it is purely optional.

```html
<a href="image.jpg" download="new_image">Download Image</a>
```

### Internal Page Links (Anchors)

To navigate to another section on the same page instead of redirecting to a different page, use an anchor link with id (`href="#id"`) of destination section.

It is very useful for single page website where you have all the section (lik Services, About Us, Contact Us etc) in the same page.

```html
<html>
    <head>
        <title> Internal Link </title>
    </head>
    <body>
        <section style="height:80vh">
            <!-- Link -->
            <a href="#contact">Go to Contact Section</a>
        </section>
        <!-- Target/Destination section -->
        <section style="height:100vh" id="contact">
            <h2>Contact Us</h2>
        </section>
    </body>
</html>
```

The link scrolls to the element with the matching `id`.

### Common Mistakes to Avoid

- Using `target="_blank"` without `rel="noopener noreferrer"` can introduce security risks.
- Missing `id` on the target element causes internal links not to work.
- Using an anchor tag without `href` results in a non-functional link.

## Example: All Link Types in One Page

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Link Examples</title>
  </head>
  <body>

    <h1>HTML Link Demonstration</h1>

    <!-- External link in new tab -->
    <p>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit Example</a>
    </p>

    <!-- Internal page link -->
    <p>
      <a href="#about">Go to About Section</a>
    </p>

    <!-- Email link -->
    <p>
      <a href="mailto:support@example.com">Send Us an Email</a>
    </p>

    <!-- Phone link -->
    <p>
      <a href="tel:+911234567890">Call Support</a>
    </p>

    <!-- Download link -->
    <p>
      <a href="file.pdf" download>Download File</a>
    </p>

    <!-- Internal section -->
    <h2 id="about">About Us</h2>
    <p>This section gives information about our website and team.</p>

  </body>
</html>
```
### Output
![Links and Anchors Example](src/assets/images/html/links_and_anchor_1.png)

### Summary

- Use the `<a>` tag to create hyperlinks in HTML.
- `href` defines the destination — can be a URL, email, phone number, file, or internal ID.
- Use `target="_blank"` with `rel="noopener noreferrer"` to safely open links in new tabs.
- Add the `download` attribute for file downloads.
- Use `id` and anchor links for in-page navigation.


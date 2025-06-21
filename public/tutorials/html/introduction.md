## HTML Introduction
HTML stands for Hyper Text Markup Language. This is not a programming language, it's a markup language which is used to design web pages. In the context of HTML markup refers to the [tags](html?topic=basic-html-tags) or [elements](html?topic=basic-html-tags).

In the **HyperText Markup Language**, each word has it's own meaning:  
**Hyper Text:**
- This refers to text that contains links to other documents or resoures.
- The ```<a>``` (anchor) tag is the core of hypertext in HTML, creating these clickable links.

**Markup:**
- **Markup** referes to a tags. the plain text by wrapping it in tags/elements. 
- These tags/elements provide information or metadata to a web browser about the content.
- Examples include ```<a>``` for a hyperlink, ```<p>``` for a paragraph etc.  

**Language:** HTML has a specific set of rules (syntax) that define how these tags should be used. Browsers are enough capable to understand this language and render the web page accordingly.


### Why Learn HTML?
If you are learning web development, you must need to know about HTML. HTML is the standard language used to design web pages. Every website you visit is built on HTML.


### Structure of an HTML Document


```html
< !DOCTYPE html >
<html>
    <head>
        <title>Page title</title>
    </head>
    <body>
        <h1>Heading-1</h1>
        <p>Paragraph</p>
    </body>
</html>   
```
##### Output
![First HTML Example](src/assets/images/html/first_html_example.png)


### Basic anatomy of an HTML page
- The ```<!DOCTYPE html>``` declaration defines that this document is an HTML5 document
- The ```<html>``` element is the root element of an HTML page
- The ```<head>``` element contains meta information about the HTML page
- The ```<title>``` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The ```<body>``` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The ```<h1>``` element defines a large heading
- The ```<p>``` element defines a paragraph

### How HTML Works?
1. You write HTML to define the structure, content, and behavior of your webpage.
2. Save the file with **.html** extention.
3. A web browser requests the HTML file from a web server.
4. Browser reads your HTML - The browser reads your HTML from top to bottom.
5. Each tag defines a type of content.
6. The browser's HTML parser interprets the HTML and builds the DOM.
7. The browser's rendering engine uses the DOM to draw the webpage on your screen.
## How the rowser Renders HTML:
1. Let's say you type a URL like https://example.com
2. Request is sent to the server.
3. Server responds with the HTML file.
4. Browser reads the HTML.
5. Browser displays the structure.
6. Loads text, links, and images.
7. Starts fetching CSS and JS if mentioned.
8. Browser builds the Document Object Model (DOM) - a tree-like structure of your HTML elements
The DOM is what JavaScript can interact with.


### History of HTML
- ##### 1991 – HTML 1.0
   - Created by Tim Berners-Lee, the inventor of the World Wide Web.
   - Basic tags like `<p>`, `<h1>`, `<a>`, and `<img>`.
   - No styling or layout - just plain content display.

- ##### 1995 – HTML 2.0
   - Official standard published by the IETF.
   - Included form support (`<form>`,`<input>`, etc.).
   - Still very basic, but more consistent.

- ##### 1997 – HTML 3.2
   - Introduced by the W3C (World Wide Web Consortium).
   - Added support for tables, scripting (JavaScript), and basic style tags like `<font>`, `<center>`.

- ##### 1999 – HTML 4.01
   - Widely used version for many years.
   - Introduced CSS support, better forms, and scripting.
   - Had three types: Strict, Transitional, and Frameset.

- ##### 2008 – HTML5 Begins
   - Work on HTML5 started due to need for modern web features (video, audio, mobile support).
   - Developed by WHATWG and W3C.
   - 2014 – HTML5 Finalized
   - Officially released as the modern standard.

### Why HTML Keeps Evolving
   - To support new devices (phones, tablets, smart TVs).
   - To enable rich multimedia experiences.
   - To simplify development.
   - To make websites more accessible and responsive.

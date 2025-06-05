## HTML Tutorial
HTML stands for Hyper Text Markup Language. This is not a programming language, it's a markup language which is used to design web pages. In the context of HTML markup refers to the **tags** or **elements**.

In the **HyperText Markup Language**, each word has it's own meaning:  
**Hyper Text:**
- This refers to text that contains links to other documents or resoures.
- The ```<a>``` (anchor) tag is the core of hypertext in HTML, creating these clickable links.

**Markup:**
- **Markup** referes to a tags. the plain text by wrapping it in tags/elements. 
- These tags/elements provide information or metadata to a web browser about the content.
- Examples include ```<a>``` for a hyperlink, ```<p>``` for a paragraph etc.  

**Language:** HTML has a specific set of rules (syntax) that define how these tags should be used. Browsers are enough capable to understand this language and render the web page accordingly.

#### Why Learn HTML?
If you are learning web development, you must need to know about HTML. HTML is the standard language used to design web pages. Every website you visit is built on HTML.

#### HTML Example

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
![First HTML Example](src/assets/images/html/overview/output-1.png)

#### Example Explained
- The ```<!DOCTYPE html>``` declaration defines that this document is an HTML5 document
- The ```<html>``` element is the root element of an HTML page
- The ```<head>``` element contains meta information about the HTML page
- The ```<title>``` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
- The ```<body>``` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
- The ```<h1>``` element defines a large heading
- The ```<p>``` element defines a paragraph

#### How HTML Works?
An HTML file is a text file that ends in .html. In these documents, we find tags and attributes that give the meaning and structure to what we see on a webpage. A web browser loads HTML markup and displays the page to the user according to its code.

To understand HTML, think of its role as the backbone of a website that helps display each webpage's various components, such as text, pictures and links, correctly. If HTML didn't exist, web browsers would not be able to present web pages.
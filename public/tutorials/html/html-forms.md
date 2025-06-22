## HTML Forms

An HTML form is a medium to interact with users, collect user data and send to server for further processing e.g., validating and saving data into database, processing a payment etc.

HTML form consists one or more **form elements** like textbox, radio button, checkbox, dropdown, button, email, password and etc.

You can create an HTML form using `<form>` element and this is a container of all other form elements.
### Syntax

```html
<form action="url/page" method="GET/POST">
    ...
    form elements
    ...
</form>
```
#### HTML form example

```html
<html>
    <head>
        <title>HTML Forms</title>
    </head>
    <body>
        <h1>Login Form</h1>
        <form>
            <label for="username">Username:</label><br>
            <input type="text" id="username" name="username"><br><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password"><br><br>
            <input type="submit" value="Login">
        </form>
    </body>
</html
```

#### Output
![HTML form example](src/assets/images/html/form_example_1.png)

### Why use HTML Form?

HTML Forms are a way to collect user data and send that data to server for processing and make website dynamic.

**Key reasons why to use HTML form**

- **To collect user input:** Forms allow web application to collect various types of information from users such as: Personal details, User credentials etc.
- **To make web application dynamic:** Form provides a structured way to send data from the client (user's browser) to a server. This makes web application dynamic.
- **Client-Side Validation (Enhancing User Experience):** HTML5 form provides various input types (`email`, `url`, `number`, `date`, etc.) and attributes (`required`, `minlength`, `maxlength`, `pattern`) that provide client-side validation out-of-the-box. This means browsers can automatically check if an email looks like an email, if a required field is filled or not, or if a number is within a certain range before sending the data to the server. This improves user experience and reduces unnecessary server calls.




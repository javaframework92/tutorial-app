## HTML Tables

HTML tables allows you to display data in rows and columns that is easy to read and understand. To create a table in HTML, you need to use `<table>` element. `<table>` element is a container element.

#### Example

This is a very simple example containing rows and columns. You can try executing same example in Editor.

```html
<table>
    <tr>
        <th>Subject</th>
        <th>Duration</th>
    </tr>
    <tr>
        <td>HTML</td>
        <td>3 months</td>
    </tr>
</table>
```

#### Output
![Table Example](src/assets/images/html/table_example_1.png)

- `<table>` element defines an HTML table. 
- `<tr>` element defines a table row. 
- `<th>` element defines a table header. 
- `<td>` element defines a table cell or table data.

An HTML table consists one `<table>` element and one or more than one `<tr>`, `<th>` and `<td>` elements.


#### Example

```html
<table>
    <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
    </tr>
    <tr>
        <td>Mobile</td>
        <td>12000</td>
        <td>2</td>
        <td>24000</td>
    </tr>
    <tr>
        <td>Laptop</td>
        <td>56000</td>
        <td>1</td>
        <td>56000</td>
    </tr>
    <tr>
        <td>Keyboard</td>
        <td>200</td>
        <td>5</td>
        <td>1000</td>
    </tr>
    <tr>
        <td>Mouse</td>
        <td>500</td>
        <td>3</td>
        <td>1500</td>
    </tr>
</table>
```

#### Output
![Table Example](src/assets/images/html/table_example_2.png)

### Add border to an HTML Table

HTML tables don't have border by default. you can add border by using either `border` attribute or CSS properties.

##### Using `border` attribute

```html
<table border="1">
    <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
    </tr>
    <tr>
        <td>Mobile</td>
        <td>12000</td>
        <td>2</td>
        <td>24000</td>
    </tr>    
    <tr>
        <td>Keyboard</td>
        <td>200</td>
        <td>5</td>
        <td>1000</td>
    </tr>
    <tr>
        <td>Mouse</td>
        <td>500</td>
        <td>3</td>
        <td>1500</td>
    </tr>
</table>
```

##### Using CSS properties

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>Mobile</td>
            <td>12000</td>
            <td>2</td>
            <td>24000</td>
        </tr>    
        <tr>
            <td>Keyboard</td>
            <td>200</td>
            <td>5</td>
            <td>1000</td>
        </tr>
        <tr>
            <td>Mouse</td>
            <td>500</td>
            <td>3</td>
            <td>1500</td>
        </tr>
    </table>
</body>

</html>
```

#### Output
![Table Example](src/assets/images/html/table_example_3.png)


### Add Collapsed Border to an HTML Table
By default, when you apply borders to table (`<table>`) and cells (`<th>` and `<td>`), each cell gets its own border. This results in double borders between cells as you can see in above example.

To make the borders collapse into a single line, you apply `border-collapse: collapse;` CSS property to the `<table>` element itself or `<table>`, `<th>` and `<td>`.

#### Example

```html
<style>
    table,
    th,
    td {
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>
```

### Add Cell Padding

Cell padding refers to the amount of space between the content of a table cell and its border. By default the padding  between the content of a table cell and its border is set to 0.

To add more padding to the table cell, you can use CSS `padding` property on the `<th>` and `<td>` elements.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            table,
            th,
            td {
                border: 1px solid black;
                border-collapse: collapse
            }
            th,td {
                padding: 1rem;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>12000</td>
                <td>2</td>
                <td>24000</td>
            </tr>          
        </table>
    </body>
</html>
```

You can specify padding for individual sides if needed:

- `padding-top: 5px;`
- `padding-right: 1rem;`
- `padding-bottom: 5px;`
- `padding-left: 1rem;`

Or use shorthand with different values for different sides (top, right, bottom, left):

- `padding: 5px 1rem;` (5px top/bottom, 15px right/left)
- `padding: 5px 10px 15px 20px;` (top 5px, right 10px, bottom 15px, left 20px)

**Note:** There was a `cellpadding` attribute in older HTML versions which you can directly use on `<table>` element. Now the `cellpadding` attribute is deprecated in HTML5.

```html
<table cellpadding="8">
</table>
```


### Add Cell Spacing

Cell spacing refers to the amount of space between the individual cells (the `<td>` and `<th>` elements) of an HTML table. By default the space is set to 2 pixels.

It's a bit difficult to understand the difference between cell spacing and cell padding:

- **Cell Spacing:** Space between cells.
- **Cell Padding:** Space between a cell's content and its own border.

To add space between cells, you need to use the CSS `border-spacing` property on the `<table>` element.

```html
<style>
  table {
    border-spacing: 10px; /* Applies 10 pixels of space between cells horizontally and vertically */
  }
</style>
```

#### Example

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            table,
            th,
            td {
                border: 1px solid black;
            }
            table{ border-spacing: 10px; }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>12000</td>
                <td>2</td>
                <td>24000</td>
            </tr>          
        </table>
    </body>
</html>
```

#### Output
![Table Example](src/assets/images/html/table_example_4.png)

**Note:** `border-spacing` won't work, if the `border-collapse` property of the table is set to `collapse`. If `border-collapse: collapse;` is set, the borders will merge, and `border-spacing` will have no effect.

### Semantic grouping elements in HTML Tables (`<thead>`, `<tbody>`, and `<tfoot>`)

In HTML tables, the `<thead>`, `<tbody>`, and `<tfoot>` elements are used to organize and semantically structure the table content. They help with accessibility, styling, and scripting.

#### Tag Purposes

1. `<thead>` **(Table Head):** Groups the table's header content. This typically contains the column headings.
2. `<tbody>` **(Table Body):** Groups the main content (data) of the table.
3. `<tfoot>` **(Table Foot):** Groups the table's footer content. This typically contains summary information, totals, or notes related to the table data.

#### Example

```html
<!DOCTYPE html>
<html>
<head>
<title>HTML Table</title>
<style>
  table {
    width: 90%;
    border-collapse: collapse;
    margin: 20px auto; 
    font-family: Arial, sans-serif;
  }

  caption {
    font-size: 1.2em;
    margin-bottom: 10px;
    text-align: left;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  thead {
    background-color: #3a005ce3;
    color: white;
  }

  thead th {
    text-transform: uppercase;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2; 
  }

  tbody tr:hover {
    background-color: #ddd;
  }

  tfoot {
    background-color: #777; 
    color: white;
  }

  tfoot td {
    text-align: right;
  }
</style>
</head>
<body>

<h1>Monthly Expense Report</h1>

<table>
  <caption>Summary of Household Expenses - June 2025</caption>
  <thead>
    <tr>
      <th>Category</th>
      <th>Item</th>
      <th>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Housing</td>
      <td>Rent</td>
      <td>22000.00</td>
    </tr>
    <tr>
      <td>Food</td>
      <td>Groceries</td>
      <td>4000.50</td>
    </tr>
    <tr>
      <td>Transportation</td>
      <td>Fuel</td>
      <td>1000.20</td>
    </tr>
    <tr>
      <td>Miscellaneous</td>
      <td>Entertainment</td>
      <td>2255.00</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Expenses</td>
      <td>29255.7</td>
    </tr>
  </tfoot>
</table>
</body>
</html>
```

#### Output
![Table Example](src/assets/images/html/table_example_5.png)


### HTML Table - `colspan` & `rowspan` attributes

By default, each `<td>` (table data cell) or `<th>` (table header cell) occupies exactly one column and one row.
In HTML tables, `colspan` and `rowspan` are attributes used to make a cell span across multiple columns or rows.
In simple word, we can merge two or more columns into a single column using `colspan` and two or more rows into single row using `rowspan`.

#### Example

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            table,
            th,
            td {
                border: 2px solid purple;
                border-collapse: collapse;
                padding: 0.5rem;
                color: purple;
            }
        </style>
    </head>
    <body>
        <table>
            <tr>
                <th>Faculty</th>
                <th colspan="2">Subject</th>                
            </tr>
            <tr>
                <td rowspan="2">Ajeet</td>
                <td>HTML</td>
                <td>JavaScript</td>
            </tr>
             <tr>               
                <td>Java</td>
                <td>Spring Boot</td>
            </tr>            
        </table>
    </body>
</html>
```

#### Output
![Table Example](src/assets/images/html/table_example_6.png)


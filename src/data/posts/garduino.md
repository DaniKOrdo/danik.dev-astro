---
pubDate: "Aug 02 2022"
title: "Garduino"
description: "Proyecto Garduino"
excerpt: "Garden + Arduino + Raspberry, proyecto para el regado automático de unas plantas mediante sensores de humedad y con un dashboard con información a tiempo real"
image: "~/assets/images/plantilla-proyecto.png"
---

## Titulo 

Subtitulo dos

- [ ] Mercury
- [x] Venus
- [ ] Mercury
- [x] Venus

### Heading three

Subtitulo tres

#### Heading four

Subtitulo 4

##### Heading five

Subtitulo 5

###### Heading six

Subtitulo 6


[[Top]](#top)

## <a name="Paragraphs"></a>Paragraphs

Párrafo con mucho texto

[[Top]](#top)

## <a name="Blockquotes"></a>Blockquotes

Citas

> Texto de cita

[[Top]](#top)

## <a name="Lists"></a>Lists

### Ordered List

1. Longan
2. Lychee
3. Excepteur ad cupidatat do elit laborum amet cillum reprehenderit consequat quis.
    Deserunt officia esse aliquip consectetur duis ut labore laborum commodo aliquip aliquip velit pariatur dolore.
4. Marionberry
5. Melon
    - Cantaloupe
    - Honeydew
    - Watermelon
6. Miracle fruit
7. Mulberry

### Unordered List

- Olive
- Orange
    - Blood orange
    - Clementine
- Papaya
- Ut aute ipsum occaecat nisi culpa Lorem id occaecat cupidatat id id magna laboris ad duis. Fugiat cillum dolore veniam nostrud proident sint consectetur eiusmod irure adipisicing.
- Passionfruit

[[Top]](#top)

## <a name="Horizontal"></a>Horizontal rule

Separación

***

Horizontal

[[Top]](#top)

## <a name="Table"></a>Table

Tabla 

| Table Heading 1 | Table Heading 2 | Center align    | Right align     | Table Heading 5 |
| :-------------- | :-------------- | :-------------: | --------------: | :-------------- |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |
| Item 1          | Item 2          | Item 3          | Item 4          | Item 5          |

[[Top]](#top)

## <a name="Code"></a>Code

### Inline code

Ad amet irure est magna id mollit Lorem in do duis enim. Excepteur velit nisi magna ea pariatur pariatur ullamco fugiat deserunt sint non sint. Duis duis est `code in text` velit velit aute culpa ex quis pariatur pariatur laborum aute pariatur duis tempor sunt ad. Irure magna voluptate dolore consectetur consectetur irure esse. Anim magna `<strong>in culpa qui officia</strong>` dolor eiusmod esse amet aute cupidatat aliqua do id voluptate cupidatat reprehenderit amet labore deserunt.

### Highlighted

Et fugiat ad nisi amet magna labore do cillum fugiat occaecat cillum Lorem proident. In sint dolor ullamco ad do adipisicing amet id excepteur Lorem aliquip sit irure veniam laborum duis cillum. Aliqua occaecat minim cillum deserunt magna sunt laboris do do irure ea nostrud consequat ut voluptate ex.

```go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
```

Ex amet id ex aliquip id do laborum excepteur exercitation elit sint commodo occaecat nostrud est. Nostrud pariatur esse veniam laborum non sint magna sit laboris minim in id. Aliqua pariatur pariatur excepteur adipisicing irure culpa consequat commodo et ex id ad.

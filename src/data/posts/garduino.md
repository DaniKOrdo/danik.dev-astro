---
pubDate: "Aug 02 2022"
title: "Garduino"
description: "Proyecto garduino"
excerpt: "Sint sit cillum pariatur eiusmod nulla pariatur ipsum. Sit laborum anim qui mollit tempor pariatur nisi minim dolor. Aliquip et adipisicing sit sit fugiat"
image: "~/assets/images/astronaut.jpg"
---

Esto es un ejemplo de garduino 

## <a name="Headings"></a>Headings

Subtitulo 

## Heading two

Subtitulo dos

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

[[Top]](#top)

## <a name="Inline"></a>Inline elements

Sint ea anim ipsum ad commodo cupidatat do **exercitation** incididunt et minim ad labore sunt. Minim deserunt labore laboris velit nulla incididunt ipsum nulla. Ullamco ad laborum ea qui et anim in laboris exercitation tempor sit officia laborum reprehenderit culpa velit quis. **Consequat commodo** reprehenderit duis [irure](#!) esse esse exercitation minim enim Lorem dolore duis irure. Nisi Lorem reprehenderit ea amet excepteur dolor excepteur magna labore proident voluptate ipsum. Reprehenderit ex esse deserunt aliqua ea officia mollit Lorem nulla magna enim. Et ad ipsum labore enim ipsum **cupidatat consequat**. Commodo non ea cupidatat magna deserunt dolore ipsum velit nulla elit veniam nulla eiusmod proident officia.

![Super wide](https://images.unsplash.com/photo-1471128466710-c26ff0d26143?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDc4MTk3Mw&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)

*Proident sit veniam in est proident officia adipisicing* ea tempor cillum non cillum velit deserunt. Voluptate laborum incididunt sit consectetur Lorem irure incididunt voluptate nostrud. Commodo ut eiusmod tempor cupidatat esse enim minim ex anim consequat. Mollit sint culpa qui laboris quis consectetur ad sint esse. Amet anim anim minim ullamco et duis non irure. Sit tempor adipisicing ea laboris `culpa ex duis sint` anim aute reprehenderit id eu ea. Aute [excepteur proident](#!) Lorem minim adipisicing nostrud mollit ad ut voluptate do nulla esse occaecat aliqua sint anim.

![Not so big](http://placekitten.com/480/400)

Incididunt in culpa cupidatat mollit cillum qui proident sit. In cillum aliquip incididunt voluptate magna amet cupidatat cillum pariatur sint aliqua est _enim **anim** voluptate_. Magna aliquip proident incididunt id duis pariatur eiusmod incididunt commodo culpa dolore sit. Culpa do nostrud elit ad exercitation anim pariatur non minim nisi **adipisicing sunt _officia_**. Do deserunt magna mollit Lorem commodo ipsum do cupidatat mollit enim ut elit veniam ea voluptate.

Reprehenderit non eu quis in ad elit esse qui aute id [incididunt](#!) dolore cillum. Esse laboris consequat dolor anim exercitation tempor aliqua deserunt velit magna laboris. Culpa culpa minim duis amet mollit do quis amet commodo nulla irure.
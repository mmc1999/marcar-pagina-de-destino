# Frontend Mentor - Bookmark landing page solution

This is a solution to the [Bookmark landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
  - The input field is empty
  - The email address is not formatted correctly

### Screenshot

![imagen de la pagina web terminada](/captura.png)


### Links


- Live Site URL: [Add live site URL here](https://pedantic-jennings-45dcba.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript vanilla

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```css
.inputMail:invalid {
    border: 2px solid red;
    border-radius: 5px;
}
```
```js
const validarForm = (e) => {
    switch(e.target.name) {
        case "mail":
            if (expresiones.mail.test(e.target.value)) {
                document.querySelector(".errorParrafo").classList.remove("active");
                document.querySelector(".inputMail").classList.add("inputMailValido");
                campo[e.target.name] = true;
                // Y LE PUEDO AGREGAR MAS CLASES ACA COMO EL ICONO EN VERDE DE QUE LA INFO ESTA OKEY 
            }else{
                document.querySelector(".errorParrafo").classList.add("active")
                campo[e.target.name] = false;
            }
            break;
        default:
            console.log("ce mamo");
            break;
    }
}
```
### Continued development

Mi idea para los siguientes proyectos es enfocarme mas en la validacion y diseño de formularios, y hacer poryectos mas interactivos.


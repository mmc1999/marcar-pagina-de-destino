# Frontend Mentor - Bookmark landing page

![Design preview for the Bookmark landing page coding challenge](./design/desktop-preview.jpg)

Frontend Mentor - Bookmark landing page solution
This is a solution to the Bookmark landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

Table of contents
Overview
The challenge
Links
My process
Built with
What I learned
Continued development
Author
Acknowledgments
Note: Delete this note and update the table of contents based on what sections you keep.

Overview
The challenge
Users should be able to:

View the optimal layout for the site depending on their device's screen size
See hover states for all interactive elements on the page
Receive an error message when the newsletter form is submitted if:
The input field is empty
The email address is not formatted correctly
Links
Solution URL: Add solution URL here
Live Site URL: Add live site URL here
My process
Built with
Semantic HTML5 markup
CSS custom properties
Flexbox
CSS Grid
Mobile-first workflow
What I learned
Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

.inputMail:invalid {
    border: 2px solid red;
    border-radius: 5px;
}
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
If you want more help with writing markdown, we'd recommend checking out The Markdown Guide to learn more.

Continued development
Mi idea para los siguientes proyectos es enfocarme mas en la validacion y diseño de formularios, y hacer poryectos mas interactivos.

Author
Website - Add your name here
Frontend Mentor - @yourusername
Twitter - @yourusername
Acknowledgments
Para este proyecto me base en la idea de frontend mentor por eso quiero agradecer a la pagina y al autor que la creo.

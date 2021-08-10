const $botomHamburguesa = document.querySelector(".imagenHamburguesa"),
    $arrayOpciones = document.querySelectorAll(".opcion"),
    $pregunta1 = document.querySelectorAll(".pregunta1");

const rotarImagen = (index) => {
    document.querySelectorAll(".iconoFlecha")[index].classList.toggle("rotarImagen");
    document.querySelectorAll(".respuesta")[index].classList.toggle("activarRespuesta");
}

const removerClase = () => {
    for (let i = 0; i < $arrayOpciones.length; i++) $arrayOpciones[i].classList.remove("active");
}

document.addEventListener("click", e => {
    /* MENU MOBILE */
    if(e.target.matches(".imagenHamburguesa")) {
        document.querySelector(".nav").classList.toggle("is-active");
        document.querySelector(".divLogo").style.display = "none";
        document.querySelector(".divBotonHamburguesa").style.display = "none";
        
    }
    if(e.target.matches(".cierre")){
        document.querySelector(".nav").classList.toggle("is-active");
        document.querySelector(".divLogo").style.display = "block";
        document.querySelector(".divBotonHamburguesa").style.display = "block";
    }
    /* FIN DE MENU MOBILE */

    /* SELEECIONAR OPCION */
    if(e.target.matches(".seleccionOpcion1")) {
        removerClase();
        $arrayOpciones[0].classList.add("active");
    }
    if(e.target.matches(".seleccionOpcion2")) {
        removerClase();
        $arrayOpciones[1].classList.add("active");
    }
    if(e.target.matches(".seleccionOpcion3")) {
        removerClase();
        $arrayOpciones[2].classList.add("active");
    }
    /* FIN DE SELECCIONAR OPCION */

    /* FAQ */
    //if(e.target.matches($pregunta1.) || e.target.matches($pregunta1.classList)) rotarImagen(0);
    if(e.target.matches(".pregunta1")) rotarImagen(0);
    if(e.target.matches(".pregunta2")) rotarImagen(1);
    if(e.target.matches(".pregunta3")) rotarImagen(2);
    if(e.target.matches(".pregunta4")) rotarImagen(3);
})

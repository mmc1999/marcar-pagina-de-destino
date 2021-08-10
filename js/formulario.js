const $formulario = document.querySelector(".formulario");
const $input = document.querySelectorAll(".inputMail")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campo = {
    mail: false
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

$input.forEach(e => {
    e.addEventListener("keyup", validarForm);
    e.addEventListener("blur", validarForm);
});


$formulario.addEventListener("submit", e => {
    e.preventDefault();

    if(campo.mail) {
        $formulario.reset();
        document.querySelector(".mailEnviado").classList.add("active");
        $input[0].classList.add("inputMailValido");
        setTimeout(() => {
            document.querySelector(".mailEnviado").classList.remove("active");
            $input[0].classList.remove("inputMailValido");
        }, 2000);

    }else {
        document.querySelector(".errorParrafo").classList.add("active");
    }
})
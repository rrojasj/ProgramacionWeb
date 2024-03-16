`use strict`;

document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria(){
    var opciones = document.getElementById('menuOpciones').value;

    // Se trabaja con la variable opciones que representa el menú
    switch (opciones){
        // Filtros de categorias
        case "revista1":
            document.querySelector('.revista1').style.display = "block"
            document.querySelector('.revista2').style.display = "none"
            document.querySelector('.revista3').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "revista2":
            document.querySelector('.revista1').style.display = "none"
            document.querySelector('.revista2').style.display = "block"
            document.querySelector('.revista3').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "revista3":
            document.querySelector('.revista1').style.display = "none"
            document.querySelector('.revista2').style.display = "none"
            document.querySelector('.revista3').style.display = "block"
            document.querySelector('.main-info').style.display = "none"
            break;
        default:
            document.querySelector('.revista1').style.display = "none"
            document.querySelector('.revista2').style.display = "none"
            document.querySelector('.revista3').style.display = "none"
            document.querySelector('.main-info').style.display = "block"
            break;
    }
}

function navegarRevista(id) {
    switch (id){
        case "btnRevista1":
            window.location.href = "https://www.wearedevelopers.com/magazine";
            break;
        case "btnRevista2":
            window.location.href = "https://sdtimes.com/sd-times-magazine/";
            break;
        case "btnRevista3":
            window.location.href = "https://www.developer-tech.com/";
            break;
    }
}

// Selecciona un elemento del DOM con la clase CSS "animacion2" y lo almacena en la variable animacion2
let animacion2 = document.querySelector(".microinteraccion2-js");
// Carga la animación utilizando la función loadAnimation de la biblioteca bodymMvin
let animation2 = bodymovin.loadAnimation({
    // Es el contenedor donde se muestra la animación, que en este caso es el elemento llamado animacion2
    container: animacion2,
    path: "https://lottie.host/ae5fb776-516e-431c-b91b-6ad236c2dc16/57YWSk3XD8.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "MicroInteracción - Software Development",
});
// En la función click se llama al método playSegments() en la animación.
// Este método reproduce la animación desde el fotograma 0 hasta el fotograma 150, y el segundo argumento (true) indica si la animación debe reproducirse en bucle.
animacion2.addEventListener("click", function() {
    animation2.playSegments([0, 91], true);
});
animacion2.style.height = "400px";
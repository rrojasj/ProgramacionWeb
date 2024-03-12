`use strict`;

// Selecciona un elemento del DOM con la clase CSS "animacion2" y lo almacena en la variable animacion1
let animacion1 = document.querySelector(".microinteraccion1-js");
// Carga la animación utilizando la función loadAnimation de la biblioteca bodymMvin
let animation = bodymovin.loadAnimation({
    // Es el contenedor donde se muestra la animación, que en este caso es el elemento llamado animacion1
    container: animacion1,
    path: "https://lottie.host/c581c59a-1493-485b-8856-b96835c8e265/KzYVfacfn2.json",
    renderer: "svg",
    loop: true,
    autoplay: true,
    name: "MicroInteracción - Menú",
});
// En la función click se llama al método playSegments() en la animación.
// Este método reproduce la animación desde el fotograma 0 hasta el fotograma 150, y el segundo argumento (true) indica si la animación debe reproducirse en bucle.
animacion1.addEventListener("click", function() {
    animation.playSegments([0, 91], true);
});
animacion1.style.height = "250px";
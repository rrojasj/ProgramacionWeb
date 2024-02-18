// Tamaño de letra en variable
let tam = 18;

// Invocar el id aumentarParrafo (incrementar)
document.getElementById("aumentarParrafo").addEventListener("click", function(){
    tam++;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});

// Invocar el id disminuirParrafo (decrementar)
document.getElementById("disminuirParrafo").addEventListener("click", function(){
    tam--;
    document.getElementById("miParrafo").style.fontSize = tam + "px";
});

// Función de la altura de línea
document.getElementById("alturaLinea").addEventListener("click", function(){
    document.getElementById("miParrafo").style.lineHeight = "30px";
});

// Función cambio de cursor de imagen
document.getElementById("tamCursor").addEventListener("click", function(){
    // Crear una imagen personalizada para el cursor
    const cursorImage = new Image();
    cursorImage.src = "imgs/cursor.png";
    // Cargar la imagen del cursos usando el evento onload
    cursorImage.onload = function(){
        document.body.style.cursor = `url(${cursorImage.src}) 14 14, auto`;
    };
});

// Función alto contraste
document.getElementById("altoContraste").addEventListener("click", function(event){
    // Permite prevenir el comportamiento predeterminado de un evento en un navegador web.
    // es útil cuando se trabaja con eventos de elementos HTML, como hacer click en enlaces o enviar formularios.
    event.preventDefault();
    // Estilo de fonto y color de texto
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
});

document.getElementById("estadoNormal").addEventListener("click", function(){
    document.getElementById("miParrafo").style.fontSize = "large";
    document.getElementById("miParrafo").style.lineWeight = "70px";
    document.getElementById("miParrafo").style.lineHeight = "normal";
    // Para establecer el cursor por defecto
    document.body.style.cursor = "default";
    // Contraste normal de pantalla de fondo
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
});
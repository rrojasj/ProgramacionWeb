`use strict`;

document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria(){
    var opciones = document.getElementById('menuOpciones').value;

    // Se trabaja con la variable opciones que representa el menú
    switch (opciones){
        // Filtros de categorias
        case "reto1":
            document.querySelector('.reto1').style.display = "block"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto2":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "block"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto3":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "block"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto4":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "block"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto5":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "block"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto6":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "block"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto7":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "block"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto8":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "block"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto9":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "block"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            break;
        case "reto10":
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "block"
            document.querySelector('.main-info').style.display = "none"
            break;
        default:
            document.querySelector('.reto1').style.display = "none"
            document.querySelector('.reto2').style.display = "none"
            document.querySelector('.reto3').style.display = "none"
            document.querySelector('.reto4').style.display = "none"
            document.querySelector('.reto5').style.display = "none"
            document.querySelector('.reto6').style.display = "none"
            document.querySelector('.reto7').style.display = "none"
            document.querySelector('.reto8').style.display = "none"
            document.querySelector('.reto9').style.display = "none"
            document.querySelector('.reto10').style.display = "none"
            document.querySelector('.main-info').style.display = "none"
            document.querySelector('.main-info').style.display = "block"
            break;
    }
}

function navegarCenfo(){
    window.open("https://ucenfotec.ac.cr/", "_blank", "noopener,noreferrer");
}

function navegarReto(id) {
    switch (id){
        case "btnReto1":
            window.location.href = "reto1.html";
            break;
        case "btnReto2":
            window.location.href = "reto2.html";
            break;
        case "btnReto3":
            window.location.href = "reto3.html";
            break;
        case "btnReto4":
            window.location.href = "reto4.html";
            break;
        case "btnReto5":
            window.location.href = "reto5.html";
            break;
        case "btnReto6":
            window.location.href = "reto6.html";
            break;
        case "btnReto7":
            window.location.href = "reto7.html";
            break;
        case "btnReto8":
            window.location.href = "reto8.html";
            break;
        case "btnReto9":
            window.location.href = "reto9.html";
            break;
        case "btnReto10":
            window.location.href = "reto10.html";
            break;
    }
}
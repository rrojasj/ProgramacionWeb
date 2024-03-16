function menu() {
    let seleccion = document.getElementById('opciones');
    let selectedOption = seleccion.options[seleccion.selectedIndex].value;

    switch (selectedOption) {
        case 'cine1':
            Swal.fire({
                icon: "success",
                title: "Ciudad del Este Curridabat",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.novacinemas.cr/cartelera/ciudad-del-este-curridabat/", "_blank", "noopener,noreferrer");
            });
            return;
        case 'cine2':
            Swal.fire({
                icon: "success",
                title: "Plaza Real Alajuela",
                text: "Un momento por favor...",
                showConfirmButton: false,
                timer: 2000,
            }).then(() => {
                window.open("https://www.novacinemas.cr/cartelera/plaza-real-alajuela/", "_blank", "noopener,noreferrer");
            });
            return;
    }
}

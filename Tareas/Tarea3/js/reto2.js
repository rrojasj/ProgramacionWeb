`use strict`;

var fechaHoy;
var consecutivoFact;
var invoiceModal = new bootstrap.Modal(document.getElementById("invoiceModal"));

var infoArticulosJSON = 
[{"nombre": "Impresora","precio": 30000},
{"nombre": "Monitor","precio": 70000},
{"nombre": "Teclado","precio": 10000},
{"nombre": "Laptop","precio": 150000}]

window.onload = function(){
    fechaHoy = new Date().toLocaleDateString();
    document.getElementById('fecha').value = fechaHoy;
    localStorage.setItem('consecutivoFact', 100);


}

function Numeros(string){//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
    
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
             //Se añaden a la salida los caracteres validos
         out += string.charAt(i);
    
    //Retornar valor filtrado
    return out;
}

function validarDatos(){
    var cliente = document.getElementById('nombreCliente').value;
    var articulo = document.getElementById('infoArticulo');
    var articuloSeleccionado = articulo.options[articulo.selectedIndex].textContent;
    var cantidad = document.getElementById('infoCantidad').value;
    var precio = obtenerPrecio(articuloSeleccionado);

    if (cliente == "" || articulo == "Seleccione el artículo" || precio == "" || cantidad == ""){
        Swal.fire({
            title: 'Atención',
            icon: 'warning',
            iconColor: '#e86069',
            text: 'Existen campos vacios. Por favor intentar de nuevo',
        })
    } else {
        openInvoiceModal(fechaHoy, cliente, articuloSeleccionado, precio, cantidad);
    }
}

function openInvoiceModal(fechaHoy, cliente, articuloSeleccionado, precio, cantidad){
    // var invoiceModal = new bootstrap.Modal(document.getElementById("invoiceModal"));
    invoiceModal.show();

    generarFactura(fechaHoy, cliente, articuloSeleccionado, precio, cantidad)
}

function generarFactura (fechaHoy, cliente, articuloSeleccionado, precio, cantidad){

    var btnGuardarGeneral = document.getElementById('btnGuardarGen');

    var consecutivoFactString = localStorage.getItem('consecutivoFact');
    consecutivoFact = parseInt(consecutivoFactString);
    console.log("Número consecutivo de factura: " + consecutivoFact);
    
    document.getElementById("facturaModal").innerHTML = consecutivoFact;
    document.getElementById("fechaModal").innerHTML = fechaHoy;
    document.getElementById("clienteModal").innerHTML = cliente;

    tablaModal.innerHTML = '';

    var datosTablaModal = "<td>" + consecutivoFact + "</td><td>" + articuloSeleccionado + "</td><td>" + cantidad + "</td><td>" + precio + "</td>";

    var lineaTabla = document.createElement("tr");

    lineaTabla.innerHTML = datosTablaModal;

    document.getElementById('tablaModal').appendChild(lineaTabla);
    var montos = calcularMontos(precio, articuloSeleccionado, cantidad);
    // var montoTotal = montos[3];

    llenarMontosModal(montos);

    btnGuardarGeneral.addEventListener('click', function(){
        guardarDatos(articuloSeleccionado, precio, cantidad, montos[3]);
    });
}

function calcularMontos (precio, articuloSeleccionado, cantidad){ 

    for (var i=0; i < infoArticulosJSON.length; i++) {
        if (infoArticulosJSON[i].nombre === articuloSeleccionado) {
            precio = infoArticulosJSON[i].precio; 
        }
    }
    
    var subtotal = precio * cantidad;
    var costoIva = (subtotal*13)/100;
    var costoServicio = (subtotal*5)/100;
    var totalMonto = subtotal+costoIva+costoServicio;
    totalMonto = totalMonto.toFixed(2);

    const montos  = [subtotal, costoIva, costoServicio, totalMonto];

    return montos;
}

function llenarMontosModal (montos) {
    document.getElementById('subtotalModal').innerHTML = montos[0];
    document.getElementById('ivaModal').innerHTML = montos[1];
    document.getElementById('servicioModal').innerHTML = montos[2];
    document.getElementById('totalPagarModal').innerHTML = montos[3];
}

function guardarDatos(articuloSeleccionado, precio, cantidad, montoTotal) {

    var consecutivoFact = parseInt(localStorage.getItem('consecutivoFact'));

    var datosTablaGen = "<td>" + consecutivoFact + "</td><td>" + articuloSeleccionado + "</td><td>" + "₡" + precio + "</td><td>" + cantidad + "</td><td>" + montoTotal + "</td></tr>";
    
    var agregar = document.createElement("tr");
    //apunta los datos de la tabla 
    agregar.innerHTML = datosTablaGen;
    //agrega los datos a la tabla usando appendChild (nodo)
    document.getElementById('tablaGeneral').appendChild(agregar);

    consecutivoFact++;
    localStorage.setItem('consecutivoFact', consecutivoFact);

    // Hide modal and reset form values
    invoiceModal.hide();
    document.getElementById("nombreCliente").value = "";
    document.getElementById("infoArticulo").value = "Selecione el artículo";
    document.getElementById("infoCantidad").value = "";
    document.getElementById("infoPrecio").value = "";

    console.log("guardarDatos function called.");
}



function obtenerPrecio(articuloSeleccionado){
    var precio = 0;
    for (var i=0; i < infoArticulosJSON.length; i++) {
        if (infoArticulosJSON[i].nombre === articuloSeleccionado) {
            precio = infoArticulosJSON[i].precio; 
            return precio;
        }
    }
}

function articuloOnChange () {

    var articulo = document.getElementById('infoArticulo');
    var articuloSeleccionado = articulo.options[articulo.selectedIndex].textContent;

    for (var i=0; i < infoArticulosJSON.length; i++) {
        if (infoArticulosJSON[i].nombre === articuloSeleccionado) {
            var precio = infoArticulosJSON[i].precio;
            document.getElementById('infoPrecio').value = precio;
            break;
        }
    }
}

function llenarMontosModal (montos) {
    document.getElementById('subtotalModal').innerHTML = montos[0];
    document.getElementById('ivaModal').innerHTML = montos[1];
    document.getElementById('servicioModal').innerHTML = montos[2];
    document.getElementById('totalPagarModal').innerHTML = montos[3];
}

function borrarDatosForm() {
    localStorage.setItem('consecFactura', 100);

    document.getElementById("nombreCliente").value = "";
    document.getElementById("infoArticulo").value = "Selecione el artículo";
    document.getElementById("infoCantidad").value = "";
    document.getElementById("infoPrecio").value = "";
}

function borrarDatosTabla() {
    consecutivoFact = 100;
    
    location.reload();
    //borra el contenido de los campos de la tabla
    document.getElementById("tablaGeneral").innerHTML = "";
}

document.getElementById('btnImprimir').addEventListener('click', function() {
    var tablaGen = document.getElementById("tablaGeneral").innerHTML;
    if (tablaGen.trim() !== ""){
        // Open a new window
        var printWindow = window.open('', '_blank');
        
        // Write the table content to the new window
        printWindow.document.write('<html><head><title>Reporte de Artículos vendidos</title></head><body>');
        printWindow.document.write('<h1>Reporte de Artículos vendidos</h1>');
        printWindow.document.write('<table border="1">');
        printWindow.document.write('<thead>');
        printWindow.document.write('<tr>');
        printWindow.document.write('<th>Factura No.</th>');
        printWindow.document.write('<th>Artículo</th>');
        printWindow.document.write('<th>Precio</th>');
        printWindow.document.write('<th>Cantidad uds.</th>');
        printWindow.document.write('<th>Total</th>');
        printWindow.document.write('</tr>');
        printWindow.document.write('</thead>');
        printWindow.document.write('<tbody>');

        // Get the table body content
        var tableBody = document.getElementById('tablaGeneral').innerHTML;

        // Write the table body content to the new window
        printWindow.document.write(tableBody);

        printWindow.document.write('</tbody>');
        printWindow.document.write('</table>');
        printWindow.document.write('</body></html>');
        
        // Print the content in the new window
        printWindow.print();
    } else {
        Swal.fire({
            title: 'Atención',
            icon: 'warning',
            iconColor: '#FFC107',
            text: 'No existen datos en la tabla. Muchas gracias!',
            buttonsStyling: false, // Disable default styling for buttons
            showCancelButton: false, // Hide the cancel button if not needed
            confirmButtonColor: '#FFC107', // Set the color of the confirm button
            customClass: {
                confirmButton: 'btn btn-warning', // Apply a custom class to the confirm button
            },
            confirmButtonText: 'Volver',
        })
    }
});
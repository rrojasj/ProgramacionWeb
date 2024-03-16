`use strict`;

window.onload = function(){
    var user = document.getElementById("in-txt-user");
    var pswd = document.getElementById("in-txt-pass");
    var credsCheckbox = document.getElementById("remember-me");

    if (localStorage.getItem('user') != null) {

        user.value = localStorage.getItem('user');
        pswd.value = localStorage.getItem('pswd');
        credsCheckbox.checked = true;
    }
}

function userLogin () {
    var user = document.getElementById("in-txt-user").value;
    var pswd = document.getElementById("in-txt-pass").value;
    var credsCheckbox = document.getElementById("remember-me");

    if (credsCheckbox.checked) {
        localStorage.setItem('user', user);
        localStorage.setItem('pswd', pswd);
    } else {
        localStorage.removeItem('user', user);
        localStorage.removeItem('pswd', pswd);
    }
    

    console.log(user);
    console.log(pswd);
    if (user == "cenfo" && pswd == "123"){
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Credenciales correctos',
          }).then((result) => {
            // Redirige a otra página después de hacer clic en OK en el SweetAlert
            if (result.isConfirmed) {
              window.location.href = 'https://ucenfotec.ac.cr/';
            }
          });
    }else {
        Swal.fire({
            icon: "error",
            title: "Incorrecto",
            text: "Por favor ingrese credenciales correctos."
          });
    };
};
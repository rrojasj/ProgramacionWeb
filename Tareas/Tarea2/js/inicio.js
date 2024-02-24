`use strict`;

function navigateToIndex() {
    window.location.href = "index.html";
}

function showCerts(){
    // La variable "x" muestra la lista por medio del ID myList
    var x = document.getElementById("myCertsList").innerHTML;
    var closeBtn = document.getElementById("closeBtn");
    document.getElementById("resultado").innerHTML = x;
    document.getElementById("resultado").style.display = "block";
    closeBtn.style.display = "block";
    closeBtn.style.setProperty('display', 'block', 'important');
  }
  function hideCerts(){
    // La variable "x" oculta la lista por medio del ID myList
    var x = document.getElementById("myCertsList").innerHTML;
    var closeBtn = document.getElementById("closeBtn");
    document.getElementById("resultado").innerHTML = x;
    document.getElementById("resultado").style.display = "none";
    closeBtn.style.display = "block";
    closeBtn.style.setProperty('display', 'none', 'important');
}

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)

      })
  })()
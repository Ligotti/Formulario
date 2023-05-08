(function() {

    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarName = function(e){
        if (formulario.nombre.value == 0) {
            alert("Completa el campo Nombre");
            e.preventDefault();
        }
    };

    var validarApellido = function(e){
        if (formulario.apellido.value == 0) {
            alert("Completa el campo Apellido");
            e.preventDefault();
        }
    };

    var validarComents = function(e){
        if (formulario.coments.value == 0) {
            alert("Por favor deje un comentario");
            e.preventDefault();
        }
    };

    var validarEmail = function(e){
        if (formulario.email.value == 0) {
            alert("Por favor ingrese un correo electrónico");
            e.preventDefault();
        }
    };


    var validar = function(e){
        validarName(e);
        validarApellido(e);
        validarEmail(e);
        validarComents(e);
    }


    formulario.addEventListener("submit", validar);
}())

function validarEmail(email){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esValido = expReg.test(email);
    if(esValido==false){}
}
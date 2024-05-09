const nombre = document.getElementById('nombre').value;
console.log("Valor del nombre:", nombre);

const nombrecant = document.getElementById('nombre').value.length;
console.log("Cantidad de letras del nombre:", nombrecant);

const cantidadForm = document.getElementsByClassName('formulario').length;
console.log("Cantidad de elementos con clase formulario:", cantidadForm);

const formularios = document.getElementsByClassName('formulario');

for (let i = 0; i < formularios.length; i++) {
    console.log("ID del formulario", i + 1, ":", formularios[i].id);
}

document.getElementById('contenido').style.backgroundColor = 'pink';

const cantidadSpan = document.querySelectorAll('span').length;
console.log("Cantidad de elementos span:", cantidadSpan);
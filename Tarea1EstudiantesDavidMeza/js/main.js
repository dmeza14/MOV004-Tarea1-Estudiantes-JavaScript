/**
* @name main.js
* @file Add a small description for this file.
* @author David Meza, <addyouremail@mail.com>
* @version 1.0.0
*/

"use strict";
window.onload = init;

//TODO: Implementar eliminar y limpiar el select.

function init(){
    //Mapeo de los elemntos de html a JavaScript
    var nombreTxt = document.getElementById('nombreTxt');
    var apellidoTxt = document.getElementById('apellidoTxt');
    var notaTxt = document.getElementById('notaTxt');
    var emailTxt = document.getElementById('emailTxt');
    var agregarBtn = document.getElementById('agregarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');
    var buscarBtn = document.getElementById('buscarBtn');
    var eliminarBtn = document.getElementById('eliminarBtn');
    var descripcionLbl = document.getElementById('descripcionLbl');

    agregarBtn.onclick = onAgregarBtn; 
    buscarBtn.onclick = onBuscarBtn;
    eliminarBtn.onclick = onEliminarBtn;

    //Arreglo para guardar la lista de estudiantes
    var estudiantes = [];
    estudiantes.push({nombre: 'Juan', apellido: 'Calazo', nota: 90, email: 'juan.calazo@gmail.com'});
    estudiantes.push({nombre: 'Carmen', apellido: 'Meza', nota: 65, email: 'cmeza@gmail.com'});
    estudiantes.push({nombre: 'Clau', apellido: 'Rena', nota: 75, email: 'crena@gmail.com'});
    llenarEstudiantesSlt();

    function onAgregarBtn(event){
        var nombre = nombreTxt.value;
        var apellido = apellidoTxt.value;
        var nota = notaTxt.value;
        var email = emailTxt.value;

        if (nombre === '' || apellido === '' || nota === '' || email === ''){
            alert('Datos incompletos!');
        } else {
            var estudiante = {nombre: nombre, apellido: apellido, nota: Number(nota), email: email};
            estudiantes.push(estudiante);
            llenarEstudiantesSlt();
            limpiarForm();
        }
    }

    function onBuscarBtn(event){
        var index = Number(estudiantesSlt.value);
        var estudiante = estudiantes[index];

        if (Number(estudiantesSlt.value === '')){
            alert('No hay datos para mostrar!');
        } else {
            descripcionLbl.innerHTML = estudiante.nombre + ' ' + estudiante.apellido + ', Nota:' + estudiante.nota;
        };

    }

    function onEliminarBtn(event){
        if (Number(estudiantesSlt.value === '')){
            alert('No hay datos para eliminar!');
        } else {
            var index = Number(estudiantesSlt.value);

       // console.log(index)
        estudiantes.splice(index,1);
       // console.dir(estudiantes);
        //estudiantesSlt.options[index] = null;
        estudiantesSlt.remove(index);
        llenarEstudiantesSlt();
        descripcionLbl.innerHTML = '';
        };
        
        
    }

    function llenarEstudiantesSlt(){
        //Borrar contenido del elemento html
        estudiantesSlt.innerHTML = '';
        estudiantes.forEach(function(estudiante, index){
            var option = document.createElement('option');
            option.innerHTML = estudiante.nombre + ' ' + estudiante.apellido;
            option.value = index;
            estudiantesSlt.appendChild(option);
        });
    }

    function limpiarForm(){
        nombreTxt.value = '';
        apellidoTxt.value = '';
        notaTxt.value = '';
        emailTxt.value = '';
    }


}
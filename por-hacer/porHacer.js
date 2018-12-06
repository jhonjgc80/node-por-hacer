const fs = require('fs');



let listadoPorHacer = [];

const guardarDB = () =>{
    //convierte un objeto a un JSON totalmente valido
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) =>{
        if (err) { throw new Error('No se pudo grabar', err); }
    })
}

//proceso inverso, obtenemos la info del archivo JSON
const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
    
}


const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,//es igual a decir descripcion=descripcion,
        completado: false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer
}

const getListado = () => {
    
    cargarDB();
    // console.log(listadoPorHacer);
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) =>{
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => {
         return tarea.descripcion === descripcion;
     });

     if (index >= 0) {
         listadoPorHacer[index].completado = completado;
         guardarDB();
         return true;
     } else {
         return false;
     } 
}

const borrar = (descripcion) =>{
    cargarDB();

    //otra forma de hacer el ejercicio
    // let nuevoListado = listadoPorHacer.filter( tarea => {
    //     return tarea.descripcion !== descripcion
    // });

    // if (listadoPorHacer.length === nuevoListado.length) {
    //     return false;
    // } else {
    //     listadoPorHacer = nuevoListado;
    //     guardarDB();
    // }

    let index = listadoPorHacer.findIndex( tarea => {
        return  tarea.descripcion === descripcion;
    });

    console.log(index);
    if (index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
        
    } else {
        return false;
    }

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}
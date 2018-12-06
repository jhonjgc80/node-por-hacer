
const descripcion = {
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer',
    demand: true
}

const completado ={
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const opts = {
    descripcion,
    completado
}



const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {descripcion} )
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Borra una tarea de la lista', {descripcion})
    .help()
    .argv;

module.exports = {
    argv
}

//const argv = require('yargs').argv;
const {argv} = require('./config/yargs');
const {crear, getListado, actualizar, borrar}  = require('./por-hacer/porHacer');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        //console.log(tarea);
        break;

    case 'listar':
        let listado = getListado();

        for (const tarea of listado) {
            console.log('=======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================'.green);
        }

        //console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':
        let listAct = actualizar(argv.descripcion, argv.completado);
        console.log(listAct);
        break;

    case 'borrar':
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;  

    default:
        console.log('Comando no reconocido.');
        break;
}
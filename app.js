require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helper/inquirer');
const { saveDB, readDB } = require('./helper/saveFile');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear();

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = readDB();

    if (tareasDB) {
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        console.clear();
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripción: ');
                tareas.crearTarea(desc)
                break;
            case '2':
                console.log(tareas.listadoCompleto());
                break;
        
            default:
                break;
        }

        saveDB(tareas.listadoArr);

        await pausa();
        
    } while (opt !== '0');
}

main();
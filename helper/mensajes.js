require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('========================'.green);
        console.log('   Seleccione una opción'.green);
        console.log('========================'.green);

        console.log(`1. Crear Tarea`);
        console.log(`2. Listar Tareas`);
        console.log(`3. Listar Tareas Completadas`);
        console.log(`4. Listar Tareas Pendientes`);
        console.log(`5. Completar Tarea(s)`);
        console.log(`6. Borrar Tarea`);
        console.log(`0. Salir \n`);

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        });
    })
    

    
}

const pausa = () => {

    return new Promise(resolve => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Presione ENTER para continuar\n'.red, (opt) => {
            readLine.close();
            resolve();
        });
    });
    
}

module.exports = {
    mostrarMenu,
    pausa
}
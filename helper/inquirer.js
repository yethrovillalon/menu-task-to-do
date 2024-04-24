require('colors');
const inquirer = require('inquirer');
const { validate } = require('uuid');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea'
            },
            {
                value: '2',
                name: '2. Listar Tareas'
            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas'
            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes'
            },
            {
                value: '5',
                name: '5. Completar Tarea(s)'
            },
            {
                value: '6',
                name: '6. Borrar Tarea'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
];

const inquirerMenu = async() => {

    console.clear();
    console.log('========================'.green);
    console.log('   Seleccione una opción'.green);
    console.log('========================'.green);

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: 'Presione enter para continuar'
        }
    ];
    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if (value.length === 0) {
                    return 'Por favor ingresar un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput
}

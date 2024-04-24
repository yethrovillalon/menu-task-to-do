const {v4: uuidv4} = require('uuid');

class Tarea {

    id = '';
    desc = '';
    completoEn = '';

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completoEn = null;
    }
}

module.exports = Tarea;
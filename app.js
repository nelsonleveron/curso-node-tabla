const { lasuma,CrearArchivo } = require('./helpers/multiplicar');

const argv = require("yargs").argv;
console.log(argv.base);



CrearArchivo(argv.base,argv.hasta)
.then(resp => console.log(resp))
.catch(err => console.log(err));
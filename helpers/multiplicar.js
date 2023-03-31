const fs = require('fs');
const colores = require('colors');
const CrearArchivo = async (base ,hasta ) =>{
    
    try {
    console.clear();
    console.log("=====================");
    console.log("TABLA DEL: ".blue  ,base);
    console.log("=====================");

    //const base = 5;
    let salida="";
        for (let i = 1; i <=hasta; i++) {
            salida+=`${base} ${"X".green} ${i} = ${ base * i}\n`;
        }
        console.log(salida)
        fs.writeFileSync(`tabla-${base}.txt`,salida );
        return `tabla-${base}.txt`;
        
    } catch (err) {
            throw err;
    }
    
}

const sumar = () =>{
    console.log("sumar");
}

module.exports = {
    CrearArchivo,
    lasuma:sumar
}
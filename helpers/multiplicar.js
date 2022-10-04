const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, limit = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limit; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${"x".yellow} ${i} ${"=".yellow} ${base * i}\n`;
    }

    if (listar) {
      console.log("============================".green);
      console.log(colors.bgMagenta(colors.white("Tabla del:", base)));
      console.log("============================".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};

const yargs = require("yargs");
const colores = require("colors");

console.log("Bienvenidos".bgGreen)

yargs.option({
  u: { demandOption: true, alias: "usuario" },
  a: { demandOption: true, alias: "apellido" },
});
const parametros = yargs.argv;
console.log(parametros);
console.log(parametros.usuario.bgGreen);
console.log(parametros.apellido.red);

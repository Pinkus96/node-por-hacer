const opts = {
    descripcion: {
        demand: true,
        alias: `d`,
        desc: "Descripcion de la tarea por realizar"
    },
    completado: {
        alias: "c",
        default: true,
        desc: "Marca como completado o pendiente la tarea"
    }
};
const argv = require(`yargs`)
    .command("crear", "Crear una tarea por hacer", opts)
    .command("actualizar", "Actualizar el estado completado de una tarea", opts)
    .command("listar", "Listar todas las tareas por hacer")
    .command("borrar", "Borra una tarea por hacer", opts)
    .help()
    .argv;

module.exports = {
    argv
};
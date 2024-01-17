// creando una tarea en gulp: se crea mediante una funcion en javascript
function tarea(done) {
    // "done" es tu callback (funcion que se manda a llamar), en lugar de done también puede ser "cb" o "callback"
    console.log("mi primer tarea en gulp con NPX");
    done(); // este callback es necesario para terminar la ejecucion del codigo en la terminal y que esta no bote errores
}
// ! ahora toca llamar la tarea (que es una funcion) para que se ejecute: en js normalmente lo realizas con tarea(). PERO EN ESTE CASO SERÁ DISTINTO PQ ESTE GULPFILE NECESITA NODE.JS PARA EJECUTARSE
// node corre en el servidor, tiene acceso a el sistema o los archivos
// ! node tiene una sintaxis especial para mandar a llamar una funcion:
// exports.primeraTarea = tarea(); // exports. es un codigo de node.js. "primerTarea" es el nombre (o identificador) con el que llamamos la funcion. // tarea() es el codigo asociado que se ejecutara cuando se mande a llamar la funcion "primerTarea"
// ! es decir: cuando mande a llamar "primerTarea", ejecutará la funcion "tarea()"

// ! si no colocamos "done" (el callback) en la terminal nos ejecutara la tarea pero nos dara un mensaje en rojo que dice que no enviaste la señal de que se completó la función
// -- callback: funcion que se manda a llamar despues de otra funcion
// -- el callback "done": se pasa todas las tareas de gulp en automatico.
// -- ese callback es la forma anterior de tener codigo asincrono en js.
// -- o sea se ejecuta todo el codigo de dentro de la funcion y si se mandaba a llamar la funcion done() sabiamos que llegamos a la parte final y que ya se habia ejecutado el codigo
// --- entonces, una vez que se llama la funcion done() significa que ya termino de ejecutarse la funcion de "tarea" (o sea function tarea(done) <- eso)

// ! el codigo anterior (*) puede ser reemplazado o se recomienda colocarlo de la siguiente manera:
exports.tarea = tarea; // * "tarea" en lugar de "primeraTarea" Y "tarea" en lugar de "tarea()"

// * LLAMANDO O EJECUTANDO LA TAREA CON GULP: mediante npx o npm
// * 1. con npx: terminal -> npx gulp tarea // (antes era primerTarea)
    // -- npx se instala junto a node.js: su ventaja es que permite ejecutar paquetes sin necesidad de instalarlos globalmente
    // leyendo por partes el codigo (*): "npx": ejecuta paquetes sin instalarlos globalmente. "gulp": sale de la carpeta .bin (binarios), es un binario de gulp, o sea la dependencia (gulp) que instalamos, (igual como instalamos sass), esto nos permite mandar a llamarlo (el binario de gulp). primerTarea: manda a llamar la tarea, que ya esta disponible en node. recuerda que npx es parte de node por lo que podemos mandarla a llamar.
    // npx es una buena forma de hacerlo pero también podemos hacerlo mediante el package.json
// * 2. con npm:
    // en package.json, en "scripts" agrega lo siguiente -> "tarea": "gulp tarea" // (antes era "primerTarea").
    // basicamente la 2da parte del script aladido "gulp tarea" es lo mismo que lo de npx
    // * para ejecutar escribe en la terminal lo siguiente: npm run tarea
    // recuerda poner el run. esto sirve para que corra el script, al cual le asociaste el "gulp tarea"
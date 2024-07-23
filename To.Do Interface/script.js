let listToDo = []
let input;

while (true) {
    input = prompt("What do you want to do?");
    if (input === "new") {
        let askNew = prompt("Enter a new task");
        { listToDo.unshift(askNew) }
    } for (let i = 0; i < listToDo.length; i++) {
        console.log(`${listToDo[i]} added to the list.`)
    }
    if (input === "quit") { break; }
}

// De momento, tenemos el loop eterno de qué queremos hacer, para que siempre aparezca el pop up.
// También tenemos la función de añadir nuevas tareas a un array y en el momento que se añade,
// la consola diga lo que se ha añadido.
// Así como la palabra "quit" para salir de bucle.
// Queda por hacer: deletear tareas del array, hacer que aparezca el array completo indexado
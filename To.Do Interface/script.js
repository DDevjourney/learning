let listToDo = []
let input;

while (true) {
    input = prompt("What do you want to do?");
    if (input === "new") {
        let askNew = prompt("Enter a new task");
        { listToDo.unshift(askNew); }
    } {
        console.log(`${askNew} added to the list.`)
    }
    if (input === "quit") 
}

// De momento, tenemos el loop eterno de qué queremos hacer, para que siempre aparezca el pop up.
// También tenemos la función de añadir nuevas tareas a un array y en el momento que se añade,
// la consola diga lo que se ha añadido. Aún así, aparecen los mensajes duplicados.
// Así como la palabra "quit" para salir de bucle.
// Queda por hacer: deletear tareas del array, hacer que aparezca el array completo indexado









let listToDo = [];
let input;

while (true) {
    input = prompt("What do you want to do? (new, list, delete, quit)");

    if (input === "new") {
        let askNew = prompt("Enter a new task");
        if (askNew) {
            listToDo.push(askNew);
            console.log(`"${askNew}" added to the list.`);
        } else {
            console.log("No task entered.");
        }
    }
    else if (input === "list") {
        console.log("Current list of tasks:");
        if (listToDo.length === 0) {
            console.log("No tasks in the list.");
        } else {
            for (let i = 0; i < listToDo.length; i++) {
                console.log(`${i + 1}: ${listToDo[i]}`);
            }
        }
    }
    else if (input === "delete") {
        let indexToDelete = prompt("Enter the number of the task to delete");
        if (indexToDelete && !isNaN(indexToDelete) && indexToDelete > 0 && indexToDelete <= listToDo.length) {
            const deletedTask = listToDo.splice(indexToDelete - 1, 1);
            console.log(`"${deletedTask}" deleted from the list.`);
        } else {
            console.log("Invalid number.");
        }
    }
    else if (input === "quit") {
        console.log("Exiting the task manager.");
        break;
    }
    else {
        console.log("Unknown command. Please enter 'new', 'list', 'delete', or 'quit'.");
    }
}











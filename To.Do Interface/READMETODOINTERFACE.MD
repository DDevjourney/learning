Esta es una lista de tareas basada en la consola del navegador. 
En las dos primeras líneas de código, tenemos las dos variables "listToDo" (como array) e "input".

En el loop (while), mantenemos que:
 Mientras while sea verdad, siempre aparecerá el prompt de qué queremos hacer en pantalla. Al ser siempre verdad,
la mayoría del tiempo aparecerá este prompt en pantalla.

¿En qué momento no aparecerá este prompt en pantalla?

1. Si "input" es "new". En este caso, aparecerá un nuevo prompt pidiéndonos que añadamos una nueva tarea.
Al introducir una nueva tarea, se añadirá al array "listToDo" e informándonos de ello en la pantalla.
                   
2.  Si "input" es "list". Aparecerá en la consola toda la lista de tareas con su correspondiente índice asignado,
que nos servirá más adelante. En el caso de que no haya tareas, aparecerá en la consola que no hay tareas en la lista.
                   
3. Si "input" es "delete". Nos pedirá el número de la tarea que queremos eliminar. Aquí se verifica que la variable no es "null"
o está vacia, que es un número válido mayor que 0 y que se encuentra en el array. También restamos uno al índice
dado que los arrays empiezan en 0. 
                   
4. Si "input" es "quit". Salimos de la aplicación.
                   
5. Si "input" no es ninguno de los anteriores, nos repetirá los comandos que podemos introducir.
                   

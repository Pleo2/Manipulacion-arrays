
// fabrica de objetos para crear mutacion de la ToDo List 
const toDoList = []

function toDo(task, status ) {
  this.task = task;
  this.status = status;
}
toDoList.push(new toDo ('write', 'true'), new toDo ('read', 'false'));
    
console.log (toDoList);
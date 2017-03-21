// export const addTodo = (startTodos, newTodo) => {
//   return startTodos.concat(newTodo);
// }

export const addTodo = (startTodos, newTodo) => [...startTodos, newTodo]

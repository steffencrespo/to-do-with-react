// export const addTodo = (startTodos, newTodo) => {
//   return startTodos.concat(newTodo);
// }

export const addTodo = (startTodos, newTodo) => [...startTodos, newTodo]

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id);

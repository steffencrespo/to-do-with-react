// export const addTodo = (startTodos, newTodo) => {
//   return startTodos.concat(newTodo);
// }

export const addTodo = (startTodos, newTodo) => [...startTodos, newTodo]

export const generateId = () => Math.floor(Math.random()*100000);

export const findById = (id, list) => list.find(item => item.id === id);

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete});

export const updateTodo = (list, updated) => {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    // here I am composing the return: the slice from 0 to the item I want out
    ...list.slice(0, updatedIndex),
    //then the item I updated, which I want in
    updated,
    //and then the slice from the index right after the updated one on
    ...list.slice(updatedIndex+1)
  ]
};

export const removeTodo = (list, id) => {
  const removeIndex = list.findIndex(item => item.id === id)
  return [
    ...list.slice(0, removeIndex),
    ...list.slice(removeIndex+1)
  ]
}

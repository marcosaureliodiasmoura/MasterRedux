export const addTodo = () => ({
  type: "ADD_TODO",
  payload: { text: "Novo TODO" }
  //Separamos em um segundo objeto, chamado payload.
  // text: "Novo TODO"
});

export const markAsCompleted = id => ({
  type: "MARK_AS_COMPLETED",
  payload: { id }
});

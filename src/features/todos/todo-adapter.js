export const todoAdapter = (data) => {
  return data.map((todo) => ({
    _id: todo._id,
    title: todo.title,
    isDone: todo.isDone,
    description: todo?.description,
  }));
};

export const todoCreateAdapter = (todo) => ({
  _id: todo._id,
  title: todo.title,
  isDone: todo.isDone,
  description: todo?.description,
});

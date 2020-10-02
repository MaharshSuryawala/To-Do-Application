const ToDo = require("../../models/todos")

module.exports = {
  todos : async () => {
    try {
      const todosFetched = await ToDo.find()
      return todosFetched.map(todo => {
        return {
          ...todo._doc,
          _id: todo.id,
          createdAt: new Date(todo._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  createToDo: async args => {
    try {
      const { name, body, status } = args.todo
      const todo = new ToDo({
        name,
        body,
        status
      })
      const newTodo = await todo.save()
      return { ...newTodo._doc, _id: newTodo.id }
    } catch (error) {
      throw error
    }
  },

  updateToDo: async ({_id, todo}) => {
    try {
      const updatedTodo = await ToDo.findByIdAndUpdate(_id, todo)
      return updatedTodo
    } catch (error) {
      throw error
    }
  },

  deleteToDo: async ({_id}) => {
    try{
      const removedTodo = await ToDo.findByIdAndRemove(_id);
      return removedTodo;
    }
    catch(error){
      throw error
    }
  }
}

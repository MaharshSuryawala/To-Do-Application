const { buildSchema } = require("graphql")

module.exports = buildSchema(`

  type ToDo {
    _id: ID!
    body: String!
    status: Boolean!
    createdAt: String!
  }


  input ToDoInput {
    body: String!
    status: Boolean!
  }

  type Query {
    todos:[ToDo!]
  }

  type Mutation {
    createToDo(todo:ToDoInput): ToDo
    deleteToDo(_id: ID!): ToDo
    updateToDo(_id: ID!, todo:ToDoInput): ToDo
  }

  schema {
    query: Query
    mutation: Mutation
  }
  
`)
import Input from "./Input"
import React, { Component } from "react"
import Tasks from "./Tasks"
import { createStore } from "redux"

const todoReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...state, payload]
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== payload)
    default:
      return state
  }
}

const store = createStore(todoReducer)

store.subscribe(() => console.log("Store changed: ", store.getState()))

store.dispatch({
  type: "ADD_TODO",
  payload: { id: 1, title: "Explore react", done: false }
})

export default class App extends Component {
  render() {
    return (
      <main>
        <h1>React to-do list</h1>
        <p>
          Because every programmer needs a stereotypical first thing to make.
        </p>

        <Input />
        <Tasks />
      </main>
    )
  }
}

import Input from "./components/input"
import React, { Component } from "react"
import Tasks from "./components/tasks"

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

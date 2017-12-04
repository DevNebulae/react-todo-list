import AddTodo from "../containers/AddTodo"
import Footer from "./Footer"
import VisibleTodoList from "../containers/VisibleTodoList"
import React from "react"

const App = () => (
  <main>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </main>
)

export default App

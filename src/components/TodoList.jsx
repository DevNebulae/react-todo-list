import PropTypes from "prop-types"
import React from "react"
import Todo from "./Todo"

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={`todo-${todo.id}`}
        {...todo}
        onClick={() => {
          onTodoClick(todo.id)
        }}
      />
    ))}
  </ul>
)

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
}

export default TodoList

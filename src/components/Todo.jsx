import React from "react"
import PropTypes from "prop-types"

const Todo = ({ completed, onClick, text }) => (
  <li
    onClick={onClick}
    style={{ textDecoration: completed ? "line-through" : "none" }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo

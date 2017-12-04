import PropTypes from "prop-types"
import React from "react"
import { addTodo } from "../actions/index"
import { connect } from "react-redux"

let AddTodo = ({ dispatch }) => {
  let input = null

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()

          if (!input.value.trim()) return
          else {
            dispatch(addTodo(input.value))
            input.value = ""
          }
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired
}
AddTodo = connect()(AddTodo)

export default AddTodo

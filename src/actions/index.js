let nextTodoId = 0

export const ADD_TODO = "ADD_TODO"
export const TOGGLE_TODO = "TOGGLE_TODO"
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
export const SHOW_ALL = "SHOW_ALL"
export const SHOW_COMPLETED = "SHOW_COMPLETED"
export const SHOW_ACTIVE = "SHOW_ACTIVE"

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

import "./styles.css"
import "babel-polyfill"

import App from "./components/App"
import React from "react"
import reducer from "./reducers"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"

const store = createStore(reducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-root")
)

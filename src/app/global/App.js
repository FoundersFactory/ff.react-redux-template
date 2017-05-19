import { render } from "react-dom"
import React from "react"
import './styles/main.css' // global resets
import styles from './App.css'

class App extends React.Component {
  render() {
    return (
      <div className={ styles.context }>
        {this.props.children}
      </div>
    )
  }
}

export default App
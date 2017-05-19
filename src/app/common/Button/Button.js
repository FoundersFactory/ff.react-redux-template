import { render } from "react-dom"
import React, { Component } from "react"
import PropTypes from 'prop-types'
import styles from './Button.css'

class Home extends Component {
  static propTypes = {
    clickHandler: PropTypes.func
  }

  render() {
    const { clickHandler } = this.props

    return (
      <button onClick={ clickHandler } className={ styles.normal }>
        { this.props.children }
      </button>
  )}
}

export default Home
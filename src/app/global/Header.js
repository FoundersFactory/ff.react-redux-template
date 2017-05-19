import { render } from "react-dom"
import React, { Component } from "react"
import { Link } from 'react-router'
import styles from './Header.css'

export default class Home extends Component {
  render() {
    return (
      <header className={ styles.bar }>
        <Link to={ "/" } className={ styles.title }>React+Redux project template 🛴</Link>
      </header>
    )
  }
}

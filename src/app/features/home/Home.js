import { render } from "react-dom"
import { connect } from 'react-redux'
import React, { Component } from "react"
import PropTypes from 'prop-types'
import styles from './Home.css'

import Header from 'app/global/Header.js'
import ExampleConnectedComponent from './ExampleConnectedComponent/ExampleConnectedComponent.js'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Header/>
        
        <div className={ styles.main }>
          <ExampleConnectedComponent/>
        </div>
      </div>
    )
  }
}

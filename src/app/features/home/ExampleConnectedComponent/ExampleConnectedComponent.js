import { render } from "react-dom"
import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import * as actions from '../Home.actions.js'

import Button from "app/common/Button/Button.js"

export default connect(state => ({
  text: state.Home.text
}), { ...actions })(
  class ExampleConnectedComponent extends Component {
    static propTypes = {
      text: PropTypes.string
    }

    handleClick = () => {
      this.props.updateText('awesome!')
    }

    render() {
      const { text } = this.props

      return (
        <div>
          <p>This is an example connected component. Clicking the button below to add an awesome word to the text below</p>

          <h2>It's going to be... {text}</h2>

          <Button clickHandler={ this.handleClick}>GO!</Button>
        </div>
      )
    }
  }
)

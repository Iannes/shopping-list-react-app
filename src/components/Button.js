import React, { Component, Fragment } from 'react';
import { MyContext } from '../context/context'

export default class Button extends Component {
  render() {
    return (
      <MyContext.Consumer>
      {context => (
        <Fragment>
          <button
            onClick={() => context.handleClick(this.props)}
            id={this.props.handleButtonIdentifier}
            className={this.props.className}
            aria-label={this.props.text}>
            {this.props.text}
          </button>
        </Fragment>
        )}
      </MyContext.Consumer>
    )
  }
}
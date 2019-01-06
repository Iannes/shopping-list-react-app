import React, { Component, Fragment } from 'react';
import { MyContext } from '../context/context'

export default class AddItem extends Component {
  render() {
  return (
    <MyContext.Consumer>
      {context => (
      <Fragment>
          <form onSubmit={context.handleSubmit} className="shopping-form">
           <article className="shopping-textfield shopping-textfield--float-label">
              <input id="newItem" value={context.inputValue} onChange={context.handleChange} type="text" />
            <label htmlFor="newItem">New Item</label>
          </article>
        </form>
        </Fragment>
      )}
    </MyContext.Consumer>
  )}
}
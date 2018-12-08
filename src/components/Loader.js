import React, { Component, Fragment } from 'react';
import { MyContext } from '../context/context'

export default class Loader extends Component {
  render(props) {
      return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <section class="loader">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
              </svg>
            </section>
          </Fragment>
        )}
        </MyContext.Consumer>
  )}
}
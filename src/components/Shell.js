import React, { Component, Fragment } from 'react';
import { Header } from './Header'

export default class Shell extends Component {
  render(props) {
    return (
      <Fragment>
        <Header title="Shopping List" />
        <main className="main">
          <section className="card cardTemplate shopping-list__container" >
            {this.props.children}
          </section>
        </main>
      </Fragment>
    )
  }
}
import React, { Component, Fragment } from 'react';
import { MyContext } from '../context/context'

export default class List extends Component  {
  render() {
    return (
      <section>
        <ul className="shopping-list">
          <MyContext.Consumer>
            {context => (
                <Fragment>
                  {context.list && context.list.map((item, i) => {
                      return <li tabIndex={i} key={`${item}-${i}`}>{item}</li>
                    })
                  }
                </Fragment>
            )}
          </MyContext.Consumer>
        </ul>
      </section>
    )
  }
}
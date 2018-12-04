import React, { Component } from 'react'

export default class List extends Component {
  render(props) {

    const { list } = this.props
    return (
      <section>
          <ul className="shopping-list">
                {list && list.map(item => {
                   return <li key={item}>{item}</li>
                })}
          </ul>
      </section>
    )
  }
}

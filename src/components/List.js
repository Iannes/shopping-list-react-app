import React, { Component } from 'react'

export default class List extends Component {
  render(props) {
    return (
      <section>
          <ul className="shopping-list">
                {this.props.list.map(item => {
                   return <li key={item}>{item}</li>
                })}
          </ul>
      </section>
    )
  }
}

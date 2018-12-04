import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header className="header">
            <h1 className="header__title">Shopping List</h1>
            <button id="butRefresh" className="headerButton" aria-label="Refresh"></button>
            <button id="butAdd" className="headerButton" aria-label="Add"></button>
      </header>
    )
  }
}

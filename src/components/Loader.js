import React, { Component } from 'react'

export default class Loader extends Component {
  render(props) {
      if(this.props.loading) {
        return (
            <section className="loader">
                <svg viewBox="0 0 32 32" width="32" height="32">
                <circle id="spinner" cx="16" cy="16" r="14" fill="none"></circle>
                </svg>
             </section>
        )
      } else {
        return false
      }

  }
}



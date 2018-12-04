import React, { Component } from 'react'

export default class AddItem extends Component {
  render(props) {
    return (   
        <form onSubmit={this.props.addItem} className="shopping-form">   
            <article className="shopping-textfield shopping-textfield--float-label">
                <input value={this.props.val} onChange={this.props.getNewItem} type="text" />
                <label>New Item</label>
            </article>
        </form>
    )
  }
}

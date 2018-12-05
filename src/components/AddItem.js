import React from 'react'

export const AddItem = (props) => {
  
    return (   
        <form onSubmit={props.addItem} className="shopping-form">   
            <article className="shopping-textfield shopping-textfield--float-label">
                <input id="newItem" value={props.val} onChange={props.getNewItem} type="text" />
                <label htmlFor="newItem">New Item</label>
            </article>
        </form>
    )
  }

import React from 'react'

export const List = (props) => {

  const {list} = props
    return (
      <section>
          <ul className="shopping-list">
                {list && list.map((item, i) => {
                   return <li tabIndex={i} key={item}>{item}</li>
                })}
          </ul>
      </section>
    )
  }

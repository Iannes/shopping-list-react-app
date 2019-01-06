import React from 'react'
import Button from './Button'

export const Header = (props) => {

  return (
    <header data-list={props.dataList} className="header">
      <h1 className="header__title">{props.title}</h1>
      <Button buttonId='save' className="headerButton" text="Save" />
      <Button buttonId='clear' className="headerButton" text="Clear" />
    </header>
  )
}
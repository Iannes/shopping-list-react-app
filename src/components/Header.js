import React from 'react'
import Button from './Button'
// import {HandleButtonClick} from '../utils/HandleButtonClick'

export const Header = (props) => {

    return (
        <header data-list={props.dataList} className="header">
            <h1 className="header__title">{props.title}</h1>            
            <Button dataList={props.dataList}  handleButtonIdentifier='save' className="headerButton" text="Save"/>            
      </header>
    )  
}

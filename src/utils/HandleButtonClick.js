import React, { Component } from 'react';

export default class HandleButtonClick extends Component {
    
    const {id} = props.target

    if(id === 'save') {
        console.log(props)
    } else {
        //add item
    }
}
import React, { Component } from 'react';

export default class Button extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    state = {
        cache: []
    }

handleClick(props) {    

    const {dataList} = this.props

    localStorage.setItem("cached", JSON.stringify(dataList)) 

}
    render() {
        return (
        <button 
            onClick={(e) => this.handleClick(e)} 
            data-list={[...this.props.dataList]} 
            id={this.props.handleButtonIdentifier} 
            className={this.props.className} 
            aria-label={this.props.text}>{this.props.text}
        
        </button>
    )
  }
}
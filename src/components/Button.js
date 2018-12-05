import React, { Component } from 'react';

export default class Button extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.cache = this.cache.bind(this)
        this.clearCache = this.clearCache.bind(this)
    }

    cache() {
        const {dataList} = this.props        
        localStorage.setItem("cached", JSON.stringify(dataList)) 
        alert('All items saved :)')
    }

    clearCache() {
        /*eslint-disable*/
        let confirmed = confirm('Are you sure?')
        if(confirmed) {
            localStorage.clear() 
        } else {
            return;
        }
        /*eslint-enable*/
        
       
    }

handleClick(props) {    

    if(this.props.text === "Save") {
        this.cache()
    } else {
        this.clearCache()        
    }

}
    render() {
        return (
            <button 
                onClick={() => this.handleClick()} 
                data-list={[...this.props.dataList]} 
                id={this.props.handleButtonIdentifier} 
                className={this.props.className} 
                aria-label={this.props.text}>{this.props.text}        
            </button>
    )
  }
}
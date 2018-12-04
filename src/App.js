import React, { Component } from 'react';
import Shell from './components/Shell'
import AddItem from './components/AddItem'
import List from './components/List'
import './App.css';

class App extends Component {

    constructor(props) {

      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)

    }

    state = {
      list: [],      
      inputValue:'' ,
      isLoading: true,     
    }


    handleSubmit(e) {
      const { list, inputValue } = this.state
        e.preventDefault();               
        this.setState({
          list: list.concat(inputValue),
          inputValue: ''       
        })          
    }

    handleChange(e) {
      this.setState({
        inputValue: e.target.value
      })      
    }

  render() {
    const { list } = this.state
    return (      
        <Shell>                    
            <List list={list}/>
            <AddItem 
                getNewItem={this.handleChange}                 
                addItem={this.handleSubmit}  
                val={this.state.inputValue}             
              />
        </Shell>      
    );
  }
}

export default App;

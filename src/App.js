import React, { Component } from 'react';
import Shell from './components/Shell'
import {AddItem} from './components/AddItem'
import {List} from './components/List'
import Loader from './components/Loader';
import './App.css';

class App extends Component {

    constructor(props) {

      super(props)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)    

    }
    

    state = {
      list: JSON.parse(localStorage.getItem("cached")) || [],      
      inputValue:'' ,
      isLoading: true,     
    }

    componentDidMount() {
      this.setState({
        isLoading: false
      })
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
        <Shell dataList={[...this.state.list]}>  
            <Loader loading={this.state.isLoading}/>                  
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

import React, { Component } from 'react';

// first we will make a new context
export const MyContext = React.createContext();

// Then create a provider Component
export default class Provider extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.cache = this.cache.bind(this)
    this.clearCache = this.clearCache.bind(this)
    this.confirmAndDelete = this.confirmAndDelete.bind(this)
    this.saveToStorage = this.saveToStorage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    list: JSON.parse(localStorage.getItem("cached")) || [],
    inputValue: '',
    isLoading: true,
    cached: false
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }


  handleSubmit(e) {
    const { inputValue } = this.state
    e.preventDefault();
    this.setState({
      list: this.state.list.concat(inputValue),
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  cache() {
    const { list } = this.state
    if(list.length === 0) {
      alert('You need add at least one item to save')
    } else {
      this.saveToStorage(list)
    }
  }

  saveToStorage(list) {
    this.setState({
      cached: true
    })
    localStorage.setItem("cached", JSON.stringify(list))
    alert('All items saved :)')
  }

  confirmAndDelete() {
    let confirmed = window.confirm('Delete your shopping list?')
    if (confirmed) {
      localStorage.clear()
      this.setState({
        list: [],
        cached: false
      })
    } else {
      return;
    }
  }

  clearCache() {
    const { cached } = this.state
    cached ? this.confirmAndDelete() : alert('There are no saved items to clear.')
  }

  handleClick(props) {
    // Check if it's the save or the clear button
    props.text === "Save" ? this.cache() : this.clearCache();
  }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        handleClick: this.handleClick,
        handleSubmit: this.handleSubmit,
        handleChange: this.handleChange,
        inputValue: this.state.inputValue,
        list: this.state.list
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

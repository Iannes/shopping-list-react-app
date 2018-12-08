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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  state = {
    list: JSON.parse(localStorage.getItem("cached")) || [],
    inputValue: '',
    isLoading: true,
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
    localStorage.setItem("cached", JSON.stringify(list))
    alert('All items saved :)')
  }

  clearCache() {

    let confirmed = window.confirm('Delete your shopping list?')
    if (confirmed) {
      localStorage.clear()
      this.setState({
        list: []
      })
    } else {
        return;
    }
  }

  handleClick(props) {

    if (props.text === "Save") {
      this.cache()
    } else {
      this.clearCache()
    }

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

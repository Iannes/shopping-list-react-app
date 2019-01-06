import React, { Component } from 'react';
import Provider from './context/context'
import Shell from './components/Shell'
import AddItem from './components/AddItem'
import List from './components/List'
import Button from './components/Button'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Shell>
          <List />
          <AddItem />
        </Shell>
      </Provider>
    );
  }
}

export default App;

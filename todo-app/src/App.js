import React, { Component } from 'react';
// import TodosContainer from './containers/TodosContainer.old'
import TodosContainer from './containers/TodosContainer'
import DarkMode from "./components/DarkMode";
import './App.css';




class App extends Component {
    render() {
        return (
          <div>
          <DarkMode />
          <TodosContainer />
          </div>
          
        );
    }
}

export default App;

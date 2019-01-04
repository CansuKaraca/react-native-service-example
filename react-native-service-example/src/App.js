import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

class App extends Component {
    state ={
        users: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(users => users.data)
            .then(users => {
                this.setState({users : users,});})
    }

/*
* another method
*
* componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(users => {
                this.setState({users : users,});})
    }
*
* */
    render() {
    return (
      <div className="App">
          <h1>users</h1>
        {
            this.state.users.map(user => <div key = {user.id}>
            {user.id} - {user.title}
            </div>
            )
        }
      </div>
    );
  }
}

export default App;

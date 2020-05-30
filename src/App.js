
import React, { Component } from 'react'

import {CardList} from './components/card-list/card-list.component'
import  Search  from './components/search/search.component';

import './App.css';

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleOnChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search filter={this.handleOnChange} placeholder={'search monsters'}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}




import React, { Component } from 'react';
import NamesContainer from './NamesContainer';

export default class Searchbar extends Component {
  state = {
    names:['John', 'Abigail', 'Beyonce', 'Khloe Kardashian', 'George Bush', 'Queen Elizabeth', 'Yeezy', 'Ivanka Trump', 'Leonardo DiCaprio'],
    searchTerm:''
  }
  editSearchTerm = (e)=> {
    this.setState({searchTerm: e.target.value})
  }
  dynamicSearch = () => {
    return this.state.names.filter(name=>name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }
  render() {
    return (
      <div>
        <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder='search for a name'/>
        <h3>These are the important names: </h3>
        <NamesContainer names={this.dynamicSearch()}/>
      </div>
    )
  }
}

import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import './App.scss'
import Data from './dummy-data'
class App extends Component {
  state = {
    data: Data
  };

  render() {
    return (
      <div className='App'>
        <SearchBar />
        {this.state.data.map(elem=><PostContainer key={elem.username} data={elem}/>)}
      </div>
    );
  }
}

export default App;

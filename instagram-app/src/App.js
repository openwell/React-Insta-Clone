import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
export class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer />
      </div>
    );
  }
}

export default App;

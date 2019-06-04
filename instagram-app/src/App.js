import React, { Component } from "react";
import uuid from "uuid/v1";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./App.scss";
import Data from "./dummy-data";
class App extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    const updatedState = [...Data];
    updatedState.map(elem => (elem.id = uuid()));
    this.setState({ data: updatedState });
  }
  commentSubmitHandler = (event, data) => {
    event.preventDefault();
    let comment = event.currentTarget.children[0].value;
    const updatedState = [...this.state.data];
    updatedState.map(elem => {
      if (elem.id === data) {
        let mee = { ...elem };
        elem["comments"] = mee.comments.concat([
          { text: comment, username: "tomi" }
        ]);
      }
      return elem;
    });
    this.setState({ data: updatedState });
  };
  clickSubmitHandler=(id)=>{
    const updatedState = [...this.state.data];
    updatedState.map(elem => {
      if (elem.id === id) {
        elem.likes +=1
      }
      return elem;
    });
    this.setState({ data: updatedState });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        {this.state.data.map(elem => (
          <PostContainer
            key={uuid()}
            data={elem}
            submit={this.commentSubmitHandler}
            like={this.clickSubmitHandler}
          />
        ))}
      </div>
    );
  }
}

export default App;

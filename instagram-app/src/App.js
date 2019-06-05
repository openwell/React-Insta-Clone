import React, { Component } from "react";
import uuid from "uuid/v1";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import PostsPage from "./components/PostContainer/PostPage";
import withAuthentication from "./hoc/authentication/withAuthentication";
import Login from "./components/Login/Login";
import "./App.scss";
import Data from "./dummy-data";
class App extends Component {
  state = {
    data: [],
    search: ""
  };
 
  componentDidMount() {
    const updatedState = [...Data];
    updatedState.map(elem => (elem.id = uuid()));
    this.setState({ data: updatedState });
  }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log(prevProps, prevState, snapshot);
  // }
  commentSubmitHandler = (event, data) => {
    event.preventDefault();
    let comment = event.currentTarget.children[0].value;
    const updatedState = [...this.state.data];
    updatedState.map(elem => {
      if (elem.id === data) {
        let mee = { ...elem };
        elem["comments"] = mee.comments.concat([
          { text: comment, username: this.props.username }
        ]);
      }
      return elem;
    });
    this.setState({ data: updatedState });
  };
  likeHandler = id => {
    const updatedState = [...this.state.data];
    updatedState.map(elem => {
      if (elem.id === id) {
        elem.likes += 1;
      }
      return elem;
    });
    this.setState((state, props) => {
      // console.log(state, props);
      return { data: updatedState };
    });
  };
  searchBarHandler = event => {
    event.preventDefault();
    let value = event.currentTarget.children[0].value.trim().toLowerCase();
    this.setState({ search: value });
  };
  logoutHandler=()=>{
    this.props.logOut(false, '', '');
  }
  render() {
    let filteredState = [...this.state.data];
    let filtered = filteredState.filter(
      element => element.username.toLowerCase().indexOf(this.state.search) > -1
    );
    return (
      <div className="App">
        <SearchBar
          searchBar={this.searchBarHandler}
          username={this.props.username}
          logout={this.logoutHandler}
        />
        <PostContainer
          data={filtered}
          submit={this.commentSubmitHandler}
          like={this.likeHandler}
        />
        <PostsPage />
      </div>
    );
  }
}

export default withAuthentication(App, Login);

import React, { Component } from "react";
import uuid from "uuid/v1";
import SearchBar from "./SearchBar/SearchBar";
import PostContainer from "./PostContainer/PostContainer";
import withAuthentication from "../hoc/authentication/withAuthentication";
import "./PostPage.scss";
import Data from "../dummy-data";
class PostPage extends Component {
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
  commentSubmitHandler = (newComment, id) => {
    // console.log(newComment, id)
    this.setState(state => ({
      data: state.data.map(elem => {
        if (elem.id === id) {
          elem.comments = newComment;
        }
        return elem;
      })
    }));
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
  logoutHandler = () => {
    this.props.logOut(false, "", "");
  };
  render() {
    let page ={
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    }
    let filteredState = [...this.state.data];
    let filtered = filteredState.filter(
      element => element.username.toLowerCase().indexOf(this.state.search) > -1
    );
    let data = localStorage.getItem("User");
        data = JSON.parse(data);
    return (
      <div className="PostPage" style={page}>
        <SearchBar
          searchBar={this.searchBarHandler}
          username={data.username}
          logout={this.logoutHandler}
        />
        <PostContainer
          data={filtered}
          submit={this.commentSubmitHandler}
          like={this.likeHandler}
        />
      </div>
    );
  }
}

export default withAuthentication(PostPage);

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default PostPage => {
  return class extends Component {
    state = {
      login: false,
      username: "",
      password: ""
    };

    componentWillMount() {
      this.getUser();
    }
    getUser = () => {
      if (localStorage.getItem("User")) {
        let data = localStorage.getItem("User");
        data = JSON.parse(data);
        this.setState({
          login: data.login,
          username: data.username,
          password: data.password
        });
      }
    };

    loginHandler = (data, username, password) => {
        this.setState(state => ({
          login: !state.login,
          username: null,
          password: null
        }));
      let user = {
        login: data,
        username: username,
        password: password
      };
      localStorage.setItem("User", JSON.stringify(user));
    };

    render() {
      const hocComponent = this.state.login ? (
        <PostPage
          {...this.props}
          logOut={this.loginHandler}
        />
      ) : (
        <Redirect to="/login" />
      );
      return hocComponent;
    }
  };
};

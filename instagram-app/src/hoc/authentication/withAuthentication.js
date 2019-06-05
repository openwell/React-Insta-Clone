import React, { Component } from "react";

export default (App, Login) => {
  return class extends Component {
    state = {
      login: false,
      username: "",
      password: ""
    };
    login = (data, username, password) => {
      if (data) {
        this.setState(state => ({
          login: !state.login,
          username: username,
          password: password
        }));
      }
    };

    render() {
      const hocComponent = this.state.login ? (
        <App {...this.props} username={this.state.username}/>
      ) : (
        <Login login={this.login} />
      );
      return hocComponent;
    }
  };
};

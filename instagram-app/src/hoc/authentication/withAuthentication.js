import React, { Component } from "../../../node_modules/react";

export default (App, Login) => {
  return class extends Component {
    state = {
      login: false,
      username: "",
      password: ""
    };

    componentDidMount() {
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
      if (data) {
        this.setState(state => ({
          login: !state.login,
          username: username,
          password: password
        }));
      } else {
        this.setState(state => ({
          login: !state.login,
          username: null,
          password: null
        }));
      }
      let user = {
        login: data,
        username: username,
        password: password
      };
      localStorage.setItem("User", JSON.stringify(user));
    };

    render() {
      const hocComponent = this.state.login ? (
        <App
          {...this.props}
          username={this.state.username}
          logOut={this.loginHandler}
        />
      ) : (
        <Login login={this.loginHandler} />
      );
      return hocComponent;
    }
  };
};

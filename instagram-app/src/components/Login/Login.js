import React, { Component } from "react";
import { Container } from "./LoginCss.js";

class login extends Component {
  state = {
    error: false
  };
  loginHandler = event => {
    event.preventDefault();
    const username = event.target.children[0].value.trim();
    const password = event.target.children[1].value.trim();
    if (username.length > 3 && password.length > 3) {
      // this.props.login(true, username, password);
      let user = {
        login: true,
        username: username,
        password: password
      };
      localStorage.setItem("User", JSON.stringify(user));
      this.props.history.push('/home');
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    let page ={
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    }
    return (
      <Container style={page}>
        {this.state.error ? (
          <strong className="Error">
            Try Again username/password must be > 3
          </strong>
        ) : (
          ""
        )}
        <div className="LoginHeader">
          <p>Login</p>
        </div>
        <form action="" onSubmit={this.loginHandler} className="Form">
          Username
          <input type="text" />
          Password
          <input type="password" />
          <button>Submit</button>
        </form>
      </Container>
    );
  }
}

export default login;

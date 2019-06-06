import React, { Component } from "react";
import { Container } from "./LoginCss.js";
class login extends Component {
  state = {
    username: null,
    password: null,
    error: false
  };
  loginHandler = event => {
    event.preventDefault();
    const username = event.target.children[0].value.trim();
    const password = event.target.children[1].value.trim();
    if (username.length > 3 && password.length > 3) {
      this.setState({ username: username, password: password });
      this.props.login(true, username, password);
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <Container>
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

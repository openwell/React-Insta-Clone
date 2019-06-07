import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PostPage from "../components/PostPage";
import Login from '../components/Login/Login'
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/home" component={PostPage} />
          <Redirect from='*' to='/login' />
          {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
        </Switch>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PostPage from "../components/PostPage";
import Login from "../components/Login/Login";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./App.css";
class App extends Component {

  render() {
    return (
      <>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              {/* i was not meant to use it with key. but they over lap. in is for default page */}
              <CSSTransition
                in={true}
                appear={true}
                key={location.key}
                classNames="fade"
                timeout={300}
              >
                {/* without location the animation jumps from down to up with location it give u the opportunity to animate and see but transistion */}
                {/* the uuid didnt change thats why it didnt work, the key needs to change for it to work */}
                <Switch location={location}>
                  <Route path="/login" exact component={Login} />
                  <Route path="/home" component={PostPage} />
                  <Route path="*" render={() => <Redirect to="/login" />} />
                  {/* <Redirect from='*' to='/login' /> */}
                  {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </>
    );
  }
}

export default App;

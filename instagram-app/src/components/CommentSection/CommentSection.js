import React, { Component } from "react";
import classes from "./CommentSection.module.scss";
import moment from "moment";
import uuid from "uuid/v1";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../container/App.css";

class CommentSection extends Component {
  state = {
    comment: this.props.data
  };

  addComment = event => {
    event.preventDefault();
    let comment = event.currentTarget.children[0].value;
    let user = localStorage.getItem("User");
    user = JSON.parse(user);
    let data = {
      username: user.username,
      text: comment,
      id: uuid()
    };
    // this.setState(state => ({ comment: [...state.comment, data] })); ok too
    this.setState(
      state => ({ comment: state.comment.concat(data) }),
      () => {
        // this.props.commentHandler(this.state.comment, this.props.id);
      }
    );
    event.currentTarget.reset();
  };
  deleteComment = id => {
    this.setState(
      state => ({
        comment: state.comment.filter(elem => elem.id !== id)
      }),
      () => {
        // this.props.commentHandler(this.state.comment, this.props.id);
      }
    );
  };
  render() {
    let day = moment(Date.parse(this.props.timestamp)).fromNow();
    return (
      <>
        <TransitionGroup className={classes.PostContainer_Comment}>
          {this.state.comment.map(elem => (
            <CSSTransition key={elem.id} timeout={500} classNames="fade">
              <p onClick={() => this.deleteComment(elem.id)}>
                <strong>{elem.username}</strong> {elem.text}
              </p>
            </CSSTransition>
          ))}
        </TransitionGroup>

        <div className={classes.PostContainer_CommentForm}>
          <p>{day}</p>
          <form action="" onSubmit={this.addComment}>
            <input type="text" placeholder="Add a comment" />
          </form>
        </div>
      </>
    );
  }
}

export default CommentSection;

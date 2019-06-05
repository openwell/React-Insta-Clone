import React, { Component } from "react";
import classes from "./CommentSection.module.scss";
import moment from "moment";
import uuid from "uuid/v1";

class CommentSection extends Component {
  state = {
    comment: this.props.data
  };

  render() {
    let day = moment(Date.parse(this.props.timestamp)).fromNow();
    return (
      <>
        <div className={classes.PostContainer_Comment}>
          {this.state.comment.map(elem => (
            <p key={uuid()}>
              <strong>{elem.username}</strong> {elem.text}
            </p>
          ))}
        </div>

        <div className={classes.PostContainer_CommentForm}>
          <p>{day}</p>
          <form
            action=""
            onSubmit={event => this.props.addNewComment(event, this.props.id)}
          >
            <input type="text" placeholder="Add a comment" />
          </form>
        </div>
      </>
    );
  }
}

export default CommentSection;

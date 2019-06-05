import React from "react";
import classes from "./CommentSection.module.scss";
import moment from "moment";
import uuid from "uuid/v1";
const commentSection = props => {
  let date2 = Date.parse(props.timestamp);
  let day = moment(date2).fromNow();
  return (
    <>
      <div className={classes.PostContainer_Comment}>
        {props.data.map(elem => (
          <p key={uuid()}>
            <strong>{elem.username}</strong> {elem.text}
          </p>
        ))}
      </div>

      <div className={classes.PostContainer_CommentForm}>
        <p>{day}</p>
        <form action="" onSubmit={event => props.addNewComment(event, props.id)}>
          <input type="text" placeholder="Add a comment" />
        </form>
      </div>
    </>
  );
};

export default commentSection;

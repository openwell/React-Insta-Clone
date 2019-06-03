import React from "react";
// import PropTypes from "prop-types";
import classes from "./PostContainer.module.scss";
import CommentSection from "../CommentSection/CommentSection";

const postContainer = props => {
  return (
    <div className={classes.PostContainer}>
      <div className={classes.PostContainer_Header}>
        <img src={props.data.thumbnailUrl} alt="" />
        <p>{props.data.username}</p>
      </div>
      <div className={classes.PostContainer_Img}>
        <img src={props.data.imageUrl} alt="" />
      </div>
      <div className={classes.PostContainer_Social}>
        <i className="fas fa-heart" />
        <i className="fas fa-comment" />
        <p>{props.data.likes} likes</p>
      </div>
      <div className={classes.PostContainer_Comment}>
        {props.data.comments.map(elem => (
          <CommentSection key={elem.text} data={elem} />
        ))}
      </div>
      <div className={classes.PostContainer_CommentForm}>
        <p>{props.data.timestamp}</p>
        <form action="">
          <input type="text" placeholder="Add a comment" />
        </form>
      </div>
    </div>
  );
};

postContainer.propTypes = {};

export default postContainer;

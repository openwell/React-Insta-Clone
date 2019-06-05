import React from "react";
import PropTypes from "prop-types";
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
        <i className="fas fa-heart" onClick={()=>props.like(props.data.id)}/>
        <i className="fas fa-comment" />
        <p>{props.data.likes} likes</p>
      </div>
      <CommentSection
        timestamp={props.data.timestamp}
        data={props.data.comments}
        id={props.data.id}
        addNewComment={props.submit}
      />
    </div>
  );
};

postContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  })
};

export default postContainer;

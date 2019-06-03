import React from "react";
// import PropTypes from "prop-types";
import classes from "./PostContainer.module.scss";

const postContainer = props => {
  return (
    <div className={classes.PostContainer}>
      <div className={classes.PostContainer_Header}>
        <img
          src="https://media.vanityfair.com/photos/5b047f6c10790065de9e2dc0/master/w_1482,h_2000,c_limit/emilia-clarke-0618-ss02.jpg"
          alt=""
        />
        <p>Sophie</p>
      </div>
      <div className={classes.PostContainer_Img}>
        <img src="https://media.vanityfair.com/photos/5b047f6c10790065de9e2dc0/master/w_1482,h_2000,c_limit/emilia-clarke-0618-ss02.jpg" alt="" />
      </div>
      <div className={classes.PostContainer_Social}>
        <i class="fas fa-heart" />
        <i class="fas fa-comment" />
        <p>33 Likes</p>
      </div>
      <div className={classes.PostContainer_Comment}>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className={classes.PostContainer_CommentForm}>
        <p>2 hours</p>
        <form action="">
          <input type="text" placeholder="Add a comment" />
        </form>
      </div>
    </div>
  );
};

postContainer.propTypes = {};

export default postContainer;

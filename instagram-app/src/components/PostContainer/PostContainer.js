import React from "react";
// import PropTypes from "prop-types";
import classes from "./PostContainer.module.scss";
import CommentSection from "../CommentSection/CommentSection";
import uuid from "uuid/v1";
const postContainer = props => {
  return (
    <>
      {props.data.map(elem => (
        <div className={classes.PostContainer} key={uuid()}>
          <div className={classes.PostContainer_Header}>
            <img src={elem.thumbnailUrl} alt="" />
            <p>{elem.username}</p>
          </div>
          <div className={classes.PostContainer_Img}>
            <img src={elem.imageUrl} alt="" />
          </div>
          <div className={classes.PostContainer_Social}>
            <i className="fas fa-heart" onClick={() => props.like(elem.id)} />
            <i className="fas fa-comment" />
            <p>{elem.likes} likes</p>
          </div>
          <CommentSection
            timestamp={elem.timestamp}
            data={elem.comments.map(elem => ({ ...elem, id: uuid() }))}
            id={elem.id}
            commentHandler={props.submit}
          />
        </div>
      ))}
    </>
  );
};

// postContainer.propTypes = {
//   data: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     thumbnailUrl: PropTypes.string.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//     likes: PropTypes.number.isRequired,
//     timestamp: PropTypes.string.isRequired,
//     comments: PropTypes.array.isRequired
//   })
// };

export default postContainer;

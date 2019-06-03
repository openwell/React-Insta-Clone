import React from "react";

const commentSection = (props) => {
  return (
    <> 
      <p><strong>{props.data.username}</strong> {props.data.text}</p>
    </>
  );
};

export default commentSection;

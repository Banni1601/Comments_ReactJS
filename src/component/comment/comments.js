import { Component } from "react";
import "./comments.css";
const Comment = (props) => {
  const { data, likeComment, deleteButton } = props;
  const { userId, userName, userComment, isLiked } = data;
  likeTheComment = () => {
    likeComment(userId);
  };
  deleteTheButton = () => {
    deleteButton(userId);
  };
  let classname = isLiked ? "islike" : "";
  return (
    <div className="f-con">
      <div>
        <p className={classname}> {userName} </p>
        <p> {userComment} </p>
      </div>
      <div>
        <button onClick={likeTheComment}>Like</button>
        <button onClick={deleteTheButton}>Delete</button>
      </div>
    </div>
  );
};
export default Comment;

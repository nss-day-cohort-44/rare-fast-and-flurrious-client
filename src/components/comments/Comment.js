import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./Comment.css";
import { CommentContext } from "./CommentProvider";

export const Comment = ({ comment }) => {
  const { deleteComment } = useContext(CommentContext);
  //   const history = useHistory();

  return (
    <section className="comment">
      <div className="comment_name">
        <div className="commentContent">{comment.content}</div>
        <button
          className="btn--release"
          onClick={() => {
            deleteComment(comment.id);
          }}
        >
          Delete Comment
        </button>
      </div>
    </section>
  );
};

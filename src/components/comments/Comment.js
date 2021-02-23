import React, { useContext } from "react";
import "./Comment.css";
import { CommentContext } from "./CommentProvider";
const { deleteComment } = useContext(CommentContext);
export const Comment = ({ comment }) => (
  <section className="comment">
    <div className="comment_name">
      <div className="commentContent">{comment.content}</div>
      <button
        className="btn--release"
        onClick={() => {
          deleteComment(post.id).then(() => {
            props.history.push("/posts");
          });
        }}
      >
        Delete Comment
      </button>
    </div>
  </section>
);

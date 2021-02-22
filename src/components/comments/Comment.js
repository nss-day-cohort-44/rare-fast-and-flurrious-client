import React from "react";
import "./Comment.css";
import { Link } from "react-router-dom";

export const Comment = ({ comment }) => (
  <section className="comment">
    <div className="comment_name">
      <Link to={`/posts/${comment.post_id}/comments`}>
        Post Id {comment.post_id} Comment Below
      </Link>
      <div className="commentContent">{comment.content}</div>
    </div>
  </section>
);

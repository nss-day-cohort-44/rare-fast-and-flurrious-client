import React, { useContext, useEffect, useState } from "react";
import { Comment } from "./Comment";
import { CommentContext } from "./CommentProvider";
import "./Comment.css";

export const CommentList = (props) => {
  const { comments, getCommentsByPostId } = useContext(CommentContext);
  const { filteredComments, setComments } = useState([]);
  useEffect(() => {
    console.log(props.match.params.id);
    getCommentsByPostId(parseInt(props.match.params.id));
  }, []);

  useEffect(() => {
    console.log("Comments", comments);
  }, []);

  return (
    <div className="commentList">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

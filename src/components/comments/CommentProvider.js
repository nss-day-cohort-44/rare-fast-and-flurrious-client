import React from "react";
import { useState } from "react";

export const CommentContext = React.createContext();
export const CommentProvider = (props) => {
  const [comment, setComment] = useState([]);

  const addComment = (comment) => {
    return fetch("http://localhost:8000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("app_userId")}`,
      },
      body: JSON.stringify(comment),
    });
    // .then(getComments) Issue #21
  };

  const getComment = () => {
    return fetch("http://localhost:8000/comments")
      .then((res) => res.json())
      .then(setComment);
  };
  return (
    <CommentContext.Provider
      value={{ comment, setComment, addComment, getComment }}
    >
      {props.children}
    </CommentContext.Provider>
  );
};

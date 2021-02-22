import React, { useContext, useRef, useState } from "react";
import { CommentContext } from "./CommentProvider";

// subject and comment
export const CommentForm = (props) => {
  // const [selectedCategory, setSelectedCategory] = useState(0)
  const { addComment } = useContext(CommentContext);

  const subject = useRef(null);
  const content = useRef(null);

  const constructNewComment = () => {
    let currentDate = new Date();
    {
      addComment({
        // post_id   : post_id, // to-do: get post_id?
        author_id: parseInt(localStorage.getItem("app_user_id")),
        content: content,
        subject: subject,
      });
      console
        .log("add comment", addComment)
        .then(() => props.history.push("/PostDetails"));
      // thinking the PostDetails page will have a PostComments component?
    }
  };

  return (
    <form className="CommentForm">
      <h2 className="CommentForm__subject">New Comment</h2>
      {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="commentSubject">Comment Subject: </label>
                    <input type="text" id="commentSubject" ref={subject} required autoFocus className="form-control" placeholder="Comment Subject" />
                </div>
            </fieldset> */}
      <fieldset>
        <div className="form-group">
          <label htmlFor="commentContent">Comment Content: </label>
          <textarea
            type="text"
            id="commentContent"
            ref={content}
            className="form-control"
            rows="5"
            cols="70"
          ></textarea>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewComment();
        }}
        className="btn btn-primary"
      >
        Save Comment
      </button>
    </form>
  );
};

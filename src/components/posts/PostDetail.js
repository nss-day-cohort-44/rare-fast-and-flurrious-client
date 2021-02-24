import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { CommentContext } from "../comments/CommentProvider";

//This module renders the detail page for each post

export const PostDetails = (props) => {
  const { getPostById, deletePost } = useContext(PostContext);
  const [post, setPost] = useState({});
  const { addComment } = useContext(CommentContext);

  const content = useRef(null);

  const constructNewComment = () => {
    {
      addComment({
        post: parseInt(props.match.params.id),
        content: content.current.value,
        author_id: parseInt(localStorage.getItem("app_user_id")),
      });
    }
  };

  useEffect(() => {
    const postId = parseInt(props.match.params.id);
    // console.log("props", props)
    getPostById(postId)
      // Need below .then if you do not setPost in the postProvider
      .then(setPost);
  }, []);

  const commentForm = useRef(null);
  return (
    <>
      <dialog ref={commentForm}>
        <form className="CommentForm">
          <h2 className="CommentForm__subject">New Comment</h2>

          <fieldset>
            <div className="form-group">
              <label htmlFor="commentContent">Comment Content: </label>
              <input
                type="text"
                id="commentContent"
                ref={content}
                className="form-control"
                rows="5"
                cols="70"
              />
            </div>
          </fieldset>
          <button
            type="submit"
            onClick={(evt) => {
              evt.preventDefault(); // Prevent browser from submitting the form
              constructNewComment();
              commentForm.current.close();
              console.log("CONTENT", content.current.value);
              console.log("POST ID", parseInt(props.match.params.id));
              console.log(
                "AUTHOR ID",
                parseInt(localStorage.getItem("app_user_id"))
              );
            }}
            className="btn btn-primary"
          >
            Save Comment
          </button>
        </form>
      </dialog>
      <section className="post">
        <h3>Post Detail</h3>
        <h3 className="post__title">{post.title}</h3>
        <h3 className="post__title">{post.content}</h3>
        <h3 className="post__title">{post.publication_date}</h3>
        <h3 className="post__title">{post.user_id}</h3>

        <button
          onClick={() => {
            props.history.push(`/posts/edit/${post.id}`);
          }}
        >
          Edit Post!
        </button>

        <button
          className="btn--release"
          onClick={() => {
            deletePost(post.id).then(() => {
              props.history.push("/posts");
            });
          }}
        >
          Delete Post
        </button>
        <button
          onClick={() => {
            commentForm.current.showModal();
          }}
        >
          Add Comment
        </button>
      </section>
    </>
  );
};

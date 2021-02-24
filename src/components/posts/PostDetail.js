import React, { useContext, useEffect, useState, useRef } from "react";
import { PostContext } from "./PostProvider";
import { CommentContext } from "../comments/CommentProvider";
import { TagContext } from "../tags/TagProvider";
import { Link } from "react-router-dom"

//This module renders the detail page for each post

export const PostDetails = (props) => {
  const { getPostById, deletePost, post, setPost, deletePostTag } = useContext(PostContext);
  const { addComment } = useContext(CommentContext);
  const [postTags, setPostTags] = useState([])

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
      .then(console.log(post))
  }, []);




const removeTag=(postId, pt) =>{
  const tagId = {tagId : pt}
  deletePostTag(postId, tagId)

}
// console.log(post.tags)
console.log(post)
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
        <div className="post__title">{post.content}</div>
        <h3 className="post__title">{post.publication_date}</h3>
        <h3>Tags</h3>
        <Link to={{
                pathname: `/posts/${post.id}/addtag`,
                state: { chosenPost: post }}}>Add a Tag</Link>
        {
          post.tags ? post.tags.map((pt)=>{
            return(
              <div>{pt.label}<button onClick={()=>{removeTag(post.id, pt.id)}}>Delete Tag From Post</button></div>
            )
          }) : <></>
        }
        <h3>Comments</h3>
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

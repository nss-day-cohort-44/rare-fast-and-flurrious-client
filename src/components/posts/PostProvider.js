import React from "react";
import { useState } from "react";

//This module is responsible for all methods for fetching posts from server
export const PostContext = React.createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  //method to get posts from server
  const getPosts = () => {
    return fetch("http://localhost:8000/posts")
      .then((res) => res.json())
      .then(setPosts);
  };

  //method to get post by the id from server
  const getPostById = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`).then((res) => res.json());
  };

  //method to get posts by the user id that created the post from server
  const getPostsByUserId = (userId) => {
    userId = localStorage.getItem("app_user_id");
    return fetch(`http://localhost:8000/posts?user_id=${userId}`)
      .then((res) => res.json())
      .then(setPosts);
  };

  //method to delete posts from server
  const deletePost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
      method: "DELETE",
    }).then(getPosts);
  };

  //method to create a post to add to the server
  const addPost = (post) => {
    return fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("app_userId")}`,
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  };

  //method to edit posts on the server
  const updatePost = (newPost) => {
    return fetch(`http://localhost:8000/posts/${newPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("app_userId")}`,
      },
      body: JSON.stringify(newPost),
    }).then(getPosts);
  };

  return (
    <PostContext.Provider
      value={{
        post,
        setPost,
        posts,
        setPosts,
        getPosts,
        getPostById,
        deletePost,
        addPost,
        getPostsByUserId,
        updatePost,
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

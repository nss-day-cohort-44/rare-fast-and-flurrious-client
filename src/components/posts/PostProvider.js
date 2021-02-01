import React from "react"
import { useState } from "react"

export const PostContext = React.createContext()

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState({})

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
        .then(res => res.json())
        .then(setPosts)
    }

    const getPostById = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`)
        .then(res => res.json())
        .then(setPost)
    }

    const deletePost = (id) => {
        return fetch(`http://localhost:8088/post/${id}`, {
            method: "DELETE"
        })
        .then(getPosts)
    }

    const addPost = post => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        // .then(getPosts)
    }
  
    return(
        <PostContext.Provider value={{
           post, setPost,  posts, setPosts, getPosts, getPostById, deletePost, addPost
            }}>
            {props.children}
        </PostContext.Provider>
      )
    }



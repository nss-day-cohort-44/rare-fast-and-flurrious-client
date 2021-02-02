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

    const getPostsByUserId = (userId) => {
        userId = localStorage.getItem("app_user_id")
        return fetch(`http://localhost:8088/posts?user_id=${userId}`)
            .then(res => res.json())
            .then(setPosts)
    }

    const deletePost = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`, {
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
            .then(res => res.json())

    }

    return (
        <PostContext.Provider value={{
            post, setPost, posts, setPosts, getPosts, getPostById, deletePost, addPost, getPostsByUserId
        }}>
            {props.children}
        </PostContext.Provider>
    )
}



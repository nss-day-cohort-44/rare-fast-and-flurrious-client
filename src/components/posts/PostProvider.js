import React from "react"
import { useState } from "react"


export const PostContext = React.createContext()
export const PostProvider = (props) => {


    const [posts, setPosts] = useState([])

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
    return (
        <PostContext.Provider value={{ posts, setPosts, addPost }}>
            {props.children}
        </PostContext.Provider>
    )
}
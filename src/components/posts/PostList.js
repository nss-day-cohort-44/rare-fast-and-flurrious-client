import React, { useContext, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { Post } from "./Post"

// This module populates the posts page by returning the individual post cards from Post.js
export const PostList = ({ props }) => {
    const { posts, getPosts } = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <h3>Posts</h3>
            {
                posts.map(p => {
                    return <Post key={p.id} post={p} props={props} />
                })
            }
        </>
    )

}

import React, { useState, useContext, useEffect } from "react"
import {PostContext} from "./PostProvider"
import {Post} from "./Post"

export const PostList = ({props}) => {
    const {posts, getPosts, getPostById} = useContext(PostContext)

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <h3>Posts</h3>
            {
                posts.map(p => {
                    return <Post key={p.id} post={p} props={props}/>
                })
            }        
         </>
    )

}

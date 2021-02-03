import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"

//This module renders the detail page for each post

export const PostDetails = (props) => {
    const { getPostById, deletePost } = useContext(PostContext)
    const [post, setPost] = useState({})

    useEffect(() => {
        const postId = parseInt(props.match.params.id)
        // console.log("props", props)
        getPostById(postId)

            // Need below .then if you do not setPost in the postProvider
            .then(setPost)
    }, [])

    return (
        <>
            <section className="post">
                <h3>Post Detail</h3>
                <h3 className="post__title">{post.title}</h3>
                <h3 className="post__title">{post.content}</h3>
                <h3 className="post__title">{post.publication_date}</h3>
                <h3 className="post__title">{post.user_id}</h3>

                <button onClick={() => {
                    props.history.push(`/posts/edit/${post.id}`)
                }}>Edit Post!</button>

                <button className="btn--release"
                    onClick={() => {

                        deletePost(post.id)
                            .then(() => {
                                props.history.push("/posts")
                            })
                    }}
                >Delete Post</button>

            </section>

        </>
    )
}


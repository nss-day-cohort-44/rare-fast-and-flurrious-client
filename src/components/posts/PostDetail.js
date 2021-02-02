import React, { useContext, useEffect, useState } from "react"
import { PostContext } from "./PostProvider"

export const PostDetails = (props) => {
    const { post, setPost, getPostById, deletePost } = useContext(PostContext)
    // const [post, setPost] = useState({})

    useEffect(() => {
        const postId = parseInt(props.match.params.id)

        getPostById(postId)
            .then(setPost(post))

    }, [])
    return (
        <>
            <section className="post">
                <h3>Post Detail</h3>
                <h3 className="post__title">{post.title}</h3>
                <h3 className="post__title">{post.content}</h3>
                <h3 className="post__title">{post.publication_date}</h3>
                <h3 className="post__title">{post.user_id}</h3>

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


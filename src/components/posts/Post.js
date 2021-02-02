import React from "react"
import { Link } from "react-router-dom"

export const Post = ({ post, props }) => {
    if (localStorage.getItem("app_user_id")) {

        return (
            <section className="postCard">
                <h3>
                    <Link to={{ pathname: `/posts/${post.id}`, state: { chosenPost: post } }}>
                        Title: {post.title}
                    </Link>
                </h3>
                <p>Author: {post.user_id}</p>
                <p>Category: {post.category_id}</p>
                <p>Title: {post.Title}</p>
                <p>Publication: {post.publication_date}</p>
                <p>Image: {post.image_url}</p>
                <p>Content: {post.content}</p>
                <p>Approved: {post.approved}</p>
            </section>
        )
    } else {
        return (
            <section>
                <p>No post available. </p>
            </section>
        )
    }
}

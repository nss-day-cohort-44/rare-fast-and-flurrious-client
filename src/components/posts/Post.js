import React from "react"
import { Link } from "react-router-dom"

//This module is responsible for creating the single HTML representation of a post

export const Post = ({ post }) => {

    return (
        <section className="postCard">
            <h3>
                <Link to={{ pathname: `/posts/${post.id}` }}>
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
        </section>)

}

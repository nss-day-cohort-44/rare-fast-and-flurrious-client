import React, { useContext, useEffect, useState } from "react"
import {PostContext} from "./PostProvider"

export const PostDetails = (props) => {
    const {post, setPost,  posts, setPosts, getPosts, getPostById, deletePost} = useContext(PostContext)
    // const [post, setPost] = useState({})

    useEffect(() => {
        const postId = parseInt(props.match.params.id)
        
        getPostById(postId)
        .then(setPost(props.location.state.chosenPost))
        // console.log(post)

    }, [])
    console.log(post)
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




// SELECT
// p.id,
// p.user_id,
// p.category_id,
// p.title,
// p.publication_date,
// p.image_url,
// p.content,
// p.approved
// FROM posts p
// """)
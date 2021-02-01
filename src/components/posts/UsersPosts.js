import React, {useContext, useEffect, useEffeect} from "react"
import {PostContext} from "./PostProvider"
import {Post} from "./Post"
import {Link} from "react-router-dom"

export const UserPosts = (props) => {
    const {posts, getPostsByUserId} = useContext(PostContext)


    useEffect(() => {
        getPostsByUserId()
    }, [])



return (
    <>
    <h2>My Posts</h2>
    <button clasName="Create_post" onClick={() => props.history.push("/PostForm")}>Create Post</button>
    {
                posts.map(p => <Post key={p.id} post={p} props={props}/>)
            }

    </>
)











}
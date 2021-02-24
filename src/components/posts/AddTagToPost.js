import React, {useContext, useRef, useEffect, useState} from "react"
import {TagContext} from "../tags/TagProvider"
import {PostContext} from "./PostProvider"
import { Link } from "react-router-dom"

export const AddTagToPost = (props) =>{
const {getPostById, post, addPostTag} = useContext(PostContext)
const {tags, getTags} = useContext(TagContext)

useEffect(()=>{
getTags()
.then(getPostById(parseInt(props.match.params.postId)))
},[])

const postTagLabel = (post.tags? post.tags.map(pt=>{
    return pt.id
}) : [])

console.log(props)

return(
    <form>
        <Link  to={{
                pathname: `/posts/${post.id}`}}>Back To Post</Link>
        <fieldset>
            <div>
                {
                    tags.map((t)=>{
                        if(!postTagLabel.find(pt=>parseInt(pt) === parseInt(t.id)))
                      return(
                          <div>{t.label}<button onClick={()=>{addPostTag(post.id, {tagId:t.id})}}>Add Tag To Post</button></div>
                      )
                    }
                    )
                }
            </div>
        </fieldset>
    </form>
)
}

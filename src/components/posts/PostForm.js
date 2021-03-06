import React, { useContext, useRef, useState, useEffect } from "react"
import { PostContext } from "./PostProvider"
import { CategoryContext } from "../categories/categoryProvider"

// This module renders the create post form and edit post form
export const PostForm = (props) => {

    const [post, setPost] = useState({})

    const { posts, getPosts, addPost, updatePost, getPostById } = useContext(PostContext)
    const { categories, getCategories } = useContext(CategoryContext)

    // This puts us in edit mode because of the URL end point
    // HasOwnProperty is react function
    const editMode = props.match.params.hasOwnProperty("postId")

    const title = useRef(null)
    const content = useRef(null)
    const imageUrl = useRef(null)

    const handleControlledInputChange = (event) => {
        const newPost = Object.assign({}, post)
        newPost[event.target.name] = event.target.value
        setPost(newPost)
        console.log("post", post)
    }

    useEffect(() => {
        getCategories()
        .then(getPostById(props.match.params.postId))
    }, [])

    console.log(categories)
    const constructNewPost = () => {

        let currentDate = new Date()
        if (editMode) {

            const editedPost = {
                id: parseInt(props.match.params.postId),
                userId: parseInt(localStorage.getItem("app_user_id")),
                categoryId: parseInt(post.category),
                title: title.current.value,
                profileImageUrl: imageUrl.current.value,
                content: content.current.value,
                approved: true
            }
            updatePost(editedPost).then(props.history.push("/posts"))
        } else {
            addPost({

                userId: parseInt(localStorage.getItem("app_user_id")),
                categoryId: parseInt(post.category),
                title: title.current.value,
                profileImageUrl: imageUrl.current.value,
                content: content.current.value,
                approved: true
            })
                .then((post) => {
                    props.history.push(`/posts/${post.id}`)

                })
        }
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">{editMode ? "Update Post" : "Submit Post"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Post category: </label>
                    <select
                        name="category" id="category" className="form-control"
                        onChange={handleControlledInputChange}
                    >
                        <option value="0">Category Select</option>
                        {
                            categories.map(c => (
                                <option key={c.id} value={c.id}>
                                    {c.label}
                                </option>
                            ))

                        }
                    </select >
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postTitle">Post title: </label>
                    <input type="text" id="postTitle" ref={title}
                        required autoFocus className="form-control" placeholder="Post title"
                        proptype="varchar"
                        defaultValue={post.title}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postImage">Post Image: </label>
                    <input type="url" id="postImage" ref={imageUrl}
                        required autoFocus className="form-control"
                        proptype="varchar"
                        placeholder="Image Url"
                        defaultValue={post.imageUrl}
                        onChange={handleControlledInputChange}

                    />

                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postContent">Post Content: </label>
                    <textarea type="text" id="postContent" ref={content}
                        required autoFocus className="form-control"
                        rows="5" cols="70"
                        proptype="varchar"
                        placeholder="content"
                        defaultValue={post.content}
                        onChange={handleControlledInputChange}
                    />

                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewPost()
                }}
                className="btn btn-primary">
                {editMode ? "Save Updates" : "Make Post"}
                {/* Save Post */}
            </button>
        </form>
    )
}
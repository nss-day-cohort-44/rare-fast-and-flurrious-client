import React, { useContext, useRef, useState } from "react"
import { PostContext } from "./PostProvider"
import { CategoryContext } from "../CategoryProvider"
// import "./Post.css"

export const PostForm = (props) => {

    const [selectedCategory, setSelectedCategory] = useState(0)

    const { addPost } = useContext(PostContext)
    const { category } = useContext(CategoryContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.
        No more `document.querySelector()` in React.
    */
    const title = useRef(null)
    const content = useRef(null)
    const imageUrl = useRef(null)
    const category = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        getPosts()
            .then(getCategories())
    }, [])

    const constructNewPost = () => {
        /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        let currentDate = new Date()
        {
            addPost({
                user_id: parseInt(localStorage.getItem("app_user_id")),
                category_id: category,
                title,
                publication_date: currentDate,
                image_url: imageUrl,
                content
            })
            console.log("add post", addPost)
                .then(() => props.history.push("/PostDetails"))
        }
    }

    return (
        <form className="postForm">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Post category: </label>
                    <select defaultValue="0"
                        name="category" ref={category} id="category" className="form-control" onChange={(e) => { setSelectedCategory(+e.target.value) }}>
                        <option value="0">Category Select</option>
                        {
                            category.map(c => (
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
                    <input type="text" id="postTitle" ref={title} required autoFocus className="form-control" placeholder="Post title" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postImage">Post Image: </label>
                    <input type="url" id="postImage" ref={imageUrl} className="form-control">
                    </input>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="postContent">Post Content: </label>
                    <textarea type="text" id="postContent" ref={content} className="form-control"
                        rows="5" cols="70" >
                    </textarea>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewPost()
                }}
                className="btn btn-primary">
                Save Post
            </button>
        </form>
    )
}
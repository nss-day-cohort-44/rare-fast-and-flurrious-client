import  React from "react"
import {Link} from "react-router-dom"

export const UsersPost = ({post, props}) => {
    if (localStorage.getItem("app_user_id")) {
        console.log(post)
    return (
    
    <section className="userPostCard">
        <h3>
          <Link to={{pathname: `/posts/${post.id}`, state:{chosenPost: post}}}>
              Title: {post.title}
          </Link>
        </h3>
        <p>Author: {post.user.username}</p>
        <p>Category: {post.category.label}</p>
       
    </section>
    ) 
    } else {
    return(
        <section>
           <p>No post available. </p> 
        </section>
    )
}
}
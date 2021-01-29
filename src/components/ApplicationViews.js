import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"
import { PostProvider } from "./posts/PostProvider"
import { PostForm } from "./posts/PostForm"
import {CommentProvider} from "./comments/CommentProvider"
import {CommentForm} from "./comments/CommentForm"
// import { CategoryProvider } from "./CategoryProvider"

export const ApplicationViews = () => {
    return <>

        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>

        </main>
        <ProfileProvider>
            <Route exact path="/" render={
                props => <Profile {...props} />
            } />
        </ProfileProvider>

        <CommentProvider>
            <Route path="/CommentForm" render={
                props => <CommentForm {...props}/>
            } />
        </CommentProvider>


        {/* <CategoryProvider> */}
        <PostProvider>
            <Route exact path="/PostForm" render={
                props => <PostForm {...props} />
            } />
        </PostProvider>
        {/* </CategoryProvider> */}
    </>
}

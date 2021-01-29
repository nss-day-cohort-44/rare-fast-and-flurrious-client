import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"
import { PostProvider } from "./PostProvider"
import { PostForm } from "./PostForm"
import { CategoryProvider } from "./CategoryProvider"

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

        <CategoryProvider>
            <PostProvider>
                <Route exact path="/PostDetails" render={
                    props => <PostForm {...props} />

                } />


            </PostProvider>
        </CategoryProvider>
    </>
}

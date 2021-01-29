import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"
<<<<<<< HEAD
import {CategoryProvider} from "./categories/categoryProvider"
import {CategoryList} from "./categories/categoryList"
import {CategoryForm} from "./categories/categoryForm"
=======
import { PostProvider } from "./posts/PostProvider"
import { PostForm } from "./posts/PostForm"
// import { CategoryProvider } from "./CategoryProvider"
>>>>>>> main

export const ApplicationViews = (props) => {
    return <>
<<<<<<< HEAD
        
        
        <ProfileProvider>
        <Route exact path = "/" render = {
                    props => <Profile {...props} />
                    
                } />
                <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList {...props} />
                    <CategoryForm />
                </Route>
            </CategoryProvider>
            
=======

        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>

        </main>
        <ProfileProvider>
            <Route exact path="/" render={
                props => <Profile {...props} />

            } />


>>>>>>> main
        </ProfileProvider>

        {/* <CategoryProvider> */}
        <PostProvider>
            <Route exact path="/PostForm" render={
                props => <PostForm {...props} />

            } />


        </PostProvider>
        {/* </CategoryProvider> */}
    </>
}

import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"
import {PostProvider} from "./posts/PostProvider"
import {PostList} from "./posts/PostList"
import {PostDetails} from "./posts/PostDetail"

export const ApplicationViews = () => {
    return <>
        
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        
        </main>
        <ProfileProvider>
        <Route exact path = "/" render = {
                    props => <Profile {...props} />
                    
                } />
                
        </ProfileProvider>

        <PostProvider>
                <Route exact path="/posts" render={
                    props => <PostList {...props} />
                    
                } />
                <Route exact path= "/posts/:id(\d+)" render= {
                props => <PostDetails {...props} />
                
                } />
            
        </PostProvider>
    </>
}

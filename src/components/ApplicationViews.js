import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"

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
                <CategoryProvider>
                <Route exact path="/categories">
                    <CategoryList {...props} />
                    <CategoryForm />
                </Route>
            </CategoryProvider>
            
        </ProfileProvider>
    </>
}

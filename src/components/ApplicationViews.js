import React from "react"
import { Route } from "react-router-dom"
import { ProfileProvider } from "./auth/AuthProvider"
import { Profile } from "./auth/Profile"
import {CategoryProvider} from "./categories/categoryProvider"
import {CategoryList} from "./categories/categoryList"
import {CategoryForm} from "./categories/categoryForm"

export const ApplicationViews = (props) => {
    return <>
        
        
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

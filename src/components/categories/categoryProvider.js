import React, { useState } from "react"

export const CategoryContext = React.createContext()

export const CategoryProvider = props => {
    const [categories, setCategories] = useState([])

    const getCategories = () => {
        return fetch("http://localhost:8000/categories", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("app_user_id")}`
            }
        })
            .then(res => res.json())
            .then(setCategories)
    }



    const addCategory = cat => {
        return fetch("http://localhost:8000/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("app_user_id")}`
            },
            body: JSON.stringify(cat)
        })
            .then(getCategories)
    }



    return <CategoryContext.Provider value={{
        categories, getCategories, addCategory
    }}>
        {props.children}
    </CategoryContext.Provider>

} 
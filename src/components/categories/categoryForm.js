import React, { useRef, useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"

export const CategoryForm = props => {


    const {categories, getCategories, addCategory } = useContext(CategoryContext)
    const val = useRef()

    useEffect(() => {
        getCategories()
    }, [])

    const addNewCategory = () => {
        console.log("hello")
            addCategory({
                label: val.current.value
            
            })
            .then(getCategories)
    }

    return (
        <>
            
                <input type= "text" ref={val} placeholder="New Category"></input>
                <button type = "submit" onClick={e => {
                    console.log(categories)
                    e.preventDefault()
                    addNewCategory()
                }}>Add New Category</button>
           


        </>
    )
}
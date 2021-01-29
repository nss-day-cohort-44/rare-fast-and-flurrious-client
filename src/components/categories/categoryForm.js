import React, { useRef, useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"

export const CategoryForm = props => {


    const {categories, getCategories, addCategory } = useContext(CategoryContext)
    const val = useRef()

    useEffect(() => {
        getCategories()
    }, [])

    const addNewCategory = () => {
        if (!categories.find( cat => cat.labe === labe)) {
            addCategory({
                label: label.current.value
            })
            .then(getCategories)
        }
    }

    return (
        <>
            <form>
                <input type= "text" ref={val} placeholder="New Category"></input>
                <button type = "submit" onclick={e => {
                    e.preventDefault()
                    addNewCategory()
                }}>Add New Category</button>
            </form>


        </>
    )
}
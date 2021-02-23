import React, { useState, useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"


export const CategoryForm = props => {


    const { category, addCategory, updateCategory } = useContext(CategoryContext)

    const [categoryObject, setCategoryObject] = useState({})

    const editMode = props.match.params.hasOwnProperty("categoryId")


    const handleControlledInputChange = (event) => {
        const newCategory = Object.assign({}, categoryObject)          // Create copy
        newCategory[event.target.name] = event.target.value    // Modify copy
        setCategoryObject(newCategory)
    }


    const constructNewCategory = () => {
        if (editMode) {
            // PUT
            updateCategory({
                id: category.id,
                label: categoryObject.label
            })
                .then(() => props.history.push(`/categories`))
        } else {
            // POST
            addCategory({
                label: categoryObject.label
            })
                .then(() => props.history.push(`/categories`))
        }
    }


    return (
        <fieldset>

            <button onClick={e => {
                console.log(categoryObject)
                e.preventDefault()
                props.history.push(`/categories`)
            }}>Back</button>

            <br />

            <input type="text"
                name="label"
                required autoFocus
                placeholder="New Category"
                defaultValue={category.label}
                onChange={handleControlledInputChange}></input>

            {editMode ?
                <button type="submit" onClick={e => {
                    console.log(categoryObject)
                    e.preventDefault()
                    constructNewCategory()
                }}>Update Category</button>
                :
                <button type="submit" onClick={e => {
                    console.log(categoryObject)
                    e.preventDefault()
                    constructNewCategory()
                }}>Create Category</button>}
        </fieldset>
    )
}
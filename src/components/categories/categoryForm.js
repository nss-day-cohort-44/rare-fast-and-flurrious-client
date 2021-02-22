import React, { useRef, useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"
import { useHistory } from 'react-router-dom'

export const CategoryForm = props => {

    const history = useHistory()

    const { categories, getCategories, addCategory } = useContext(CategoryContext)

    // const val = useRef()
    const [category, setCategory] = useState({})

    const editMode = props.match.params.hasOwnProperty("categoryId")

    useEffect(() => {
        getCategories()
    }, [])

    const handleControlledInputChange = (event) => {
        const newCategory = Object.assign({}, category)          // Create copy
        newCategory[event.target.name] = event.target.value    // Modify copy
        setCategory(newCategory)
    }

    const constructNewCategory = () => {
        if (editMode) {
            // PUT
            updateCategory({
                id: category.id,
                label: category.label
            })
                .then(() => history.push(`/categories`))
        } else {
            // POST
            addCategory({
                label: category.label
            })
                .then(() => history.push(`/categories`))
        }
    }


    return (
        <>

            <input type="text" ref={val} placeholder="New Category" defaultValue={catagory.label}></input>
            {editMode ?
                <button type="submit" onClick={e => {
                    console.log(categories)
                    e.preventDefault()
                    addNewCategory()
                }}>Create Category</button>
                :
                <button type="submit" onClick={e => {
                    console.log(categories)
                    e.preventDefault()
                    addNewCategory()
                }}>Update Category</button>}


        </>
    )
}
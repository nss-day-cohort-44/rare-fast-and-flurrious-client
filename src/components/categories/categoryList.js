import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"


export const CategoryList = props => {


    const { categories, getCategories, getCategory, setCategory } = useContext(CategoryContext)


    useEffect(() => {
        getCategories()
        setCategory({})
    }, [])

    return (
        <>
            <button onClick={() => {
                console.log(props)
                props.history.push(`/categories/create`)
            }}>Create New Category</button>
            <br />
            {
                categories.map(cat => {
                    return <div>
                        <p>{cat.label}</p>
                        <button onClick={() => {
                            getCategory(cat.id)
                                .then(props.history.push(`/categories/edit/${cat.id}`))
                        }}>Edit</button>
                    </div>
                })
            }
        </>
    )
}
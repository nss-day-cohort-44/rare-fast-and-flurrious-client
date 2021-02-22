import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"

export const CategoryList = props => {

    const { categories, getCategories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            {
                categories.map(cat => {
                    return <div>
                        <p>{cat.label}</p>
                        <button onClick={() => {
                            props.history.push(`/categories/edit/${cat.id}`)
                        }}>Edit</button>
                    </div>
                })
            }
        </>
    )
}
import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./categoryProvider"
import { useHistory } from 'react-router-dom'

export const CategoryList = props => {

    const history = useHistory()

    const { categories, getCategories } = useContext(CategoryContext)


    useEffect(() => {
        getCategories()
        console.log(props)
    }, [])

    return (
        <>
            <button onClick={() => {
                console.log(props)
                history.push(`/categories/create`)
            }}>Create New Category</button>
            <br />
            {
                categories.map(cat => {
                    return <div>
                        <p>{cat.label}</p>
                        <button onClick={() => {
                            console.log(props)
                            history.push(`/categories/edit/${cat.id}`)
                        }}>Edit</button>
                    </div>
                })
            }
        </>
    )
}
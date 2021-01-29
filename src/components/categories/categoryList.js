import React, {useContext, useEffect} from "react"
import { CategoryContext } from "./categoryProvider"

export const CategoryList = props => {

    const {categories, getCategories} = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            {categories.map(cat => <p>{cat.label}</p>)}

        </>
    )
}
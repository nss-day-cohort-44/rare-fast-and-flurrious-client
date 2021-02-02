import React, { useRef, useContext, useEffect } from "react"
import { TagContext } from "./tagProvider"

export const TagForm = props => {


    const {tags, getTags, addTag } = useContext(TagContext)
    const val = useRef()

    useEffect(() => {
        getTags()
    }, [])

    const addNewTag = () => {
        
            addTag({
                label: val.current.value
            
            })
            .then(getTags)
    }

    return (
        <>
            
                <input type= "text" ref={val} placeholder="New Category"></input>
                <button type = "submit" onClick={e => {
                    
                    e.preventDefault()
                    addNewTag()
                }}>Add New Tag</button>
           


        </>
    )
}
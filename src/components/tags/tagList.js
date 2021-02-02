import React, {useContext, useEffect} from "react"
import { TagContext } from "./tagProvider"

export const TagList = props => {

    const {tags, getTags} = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <>
            {tags.map(tag => <p>{tag.label}</p>)}

        </>
    )
}
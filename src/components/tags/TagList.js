import React, {useContext, useEffect} from "react"
// import { useHistory, Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TagContext } from "./TagProvider"
import {Tag} from "./Tag"


export const TagList = props => {
    // const history = useHistory()

    const {tags, getTags, addTag, deleteTag} = useContext(TagContext)

    useEffect(() => {
        getTags()
    }, [])

    return (
        <>
            <Link to="/tags/create">Create</Link>
            {tags.map(t =><Tag key={t.id} tag={t} props={props}/>)}

            <button onClick={() => {
                    props.history.push(`/tags/create`)
                }}>Create Tag!!!
        </button>

        </>
    )
}

import React, { useContext, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import { TagContext } from "./TagProvider"

export const TagForm = (props) => {
   const params = useParams()
   const location = useLocation()

    const {tags, getTags, addTag, updateTag } = useContext(TagContext)
    
    const [tag, setTag] = useState({})

    
    console.log(params)

    
    const editMode = params.hasOwnProperty("tagId")
    console.log(editMode)

    // const val = useRef(
    const handleControlledInputChange = (event) => {
            const newTag = Object.assign({}, tag)
            newTag[event.target.name] = event.target.value
            setTag(newTag)
        }
    const getTagInEditMode = () => {
        if (editMode) {
            const tagId = parseInt(params.tagId)
            const selectedTag = tags.find(t => t.id === tagId) || {}
            setTag(selectedTag)
        }
    }
    useEffect(() => {
        getTags()
    }, [])

    useEffect(() => {
        getTagInEditMode()
    }, [tags])

    // const addNewTag = () => {
        
    //         addTag({
    //             label: val.current.value
            
    //         })
    //         .then(getTags)
    // }

    const constructNewTag = () => {
  
        if (editMode) {
            updateTag({
            id: parseInt(params.tagId),
            label: tag.label
          })
            .then(() => props.history.push("/tags"))
        } else {
            addTag({
            label: tag.label
            
          })
            .then(() => props.history.push("/tags"))
        }
      }
    return (
    <>
        <form className="tagForm">
        <h2 className="tagForm__title">{editMode ? "Update Tag" : "Add Tag"}</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="label">Tag label: </label>
            <input type="text" name="label" required autoFocus className="form-control"
              placeholder="Tag name"
              onChange={handleControlledInputChange}
              value={tag.label}
            />
          </div>
        </fieldset>
       
        
        <button type="submit"
          onClick={evt => {
            evt.preventDefault()
            constructNewTag()
            }}
          className="btn btn-primary">
          {editMode ? "Submit Tag" : "Make tag"}
        </button>
        <button onClick={() => {
                    props.history.push(`/tags`)
                }}>Back
        </button>
      </form>

    </>
    )
}
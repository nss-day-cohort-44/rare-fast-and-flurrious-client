import React, {useContext, useRef} from "react";
import { TagContext } from "./TagProvider"


export const Tag = ({ tag, props}) => {
  const {deleteTag} = useContext(TagContext)
  // Delete, if you want as a window popup 
  // const confirmDelete = () => {
  //   const d = window.confirm("Are you sure, you want to delete this Tag?")
  //   if (d === true) {
  //     deleteTag(tag.id)
  //   } 

  //}

  // Delete As a Dialog
  const dialog = useRef()

  return (
    <section>
      <div style={{height: "200px"}, {fontSize: "14px"}}>
      <dialog ref= {dialog}>
        <div>
          Are you sure, you want to delete this Tag?

          <button className="btn--release"
                  onClick={() => {
                  
                    deleteTag(tag.id)
         
                     }}
              >Delete Tag</button>
              <br></br>
                  <button className="btn--release"
                  onClick={() => {

                    dialog.current.close()
                   }}
              >Cancel Delete</button>
        </div>
      </dialog>
      </div>
      
      <p>{tag.label}</p> 

      <button onClick={() => {
                    props.history.push(`/tags/edit/${tag.id}`)
                }}>Edit Tag!</button>
      <br></br>

      <button className="btn--release"
                  onClick={() => {
                   // plain Delete
                    // deleteTag(tag.id)

                    // Delete, if you want as a window popup
                    // confirmDelete()

                    dialog.current.showModal()
         
                     }}
              >Delete Tag</button>
    </section>
  );
};
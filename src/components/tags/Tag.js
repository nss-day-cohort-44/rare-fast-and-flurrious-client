import React, {useContext} from "react";
import { TagContext } from "./TagProvider"


export const Tag = ({ tag, props}) => {
  const {deleteTag} = useContext(TagContext)
  return (
    <section>
      <p>{tag.label}</p> 

      <button onClick={() => {
                    props.history.push(`/tags/edit/${tag.id}`)
                }}>Edit Tag!</button>
      <br></br>

      <button className="btn--release"
                  onClick={() => {
                  //releaseAnimal(props.match.params.animalId)
                    deleteTag(tag.id)
                // .then(() => {
                //     props.history.push("/tags")
                // })
                     }}
              >Delete Tag</button>
    </section>
  );
};
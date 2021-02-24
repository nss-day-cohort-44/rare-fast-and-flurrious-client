import React, { useContext, useEffect, useRef, useState } from "react";
import { CategoryContext } from "./categoryProvider";

export const CategoryList = (props) => {
  // Delete As a Dialog
  const dialog = useRef();
<<<<<<< HEAD
=======
  const [selDelCatId, setSelDelCatId] = useState(0);
>>>>>>> 0bfc8219f9d86314e2121fac474600b0d397a618

  const {
    categories,
    getCategories,
    getCategory,
    setCategory,
    deleteCategory,
  } = useContext(CategoryContext);

  useEffect(() => {
    getCategories();
    setCategory({});
  }, []);

  return (
    <>
      <button
        onClick={() => {
          console.log(props);
          props.history.push(`/categories/create`);
        }}
      >
        Create New Category
      </button>
      <br />
      <dialog ref={dialog}>
              <div>
                Are you sure, you want to delete this Category?
                <button
                  className="btn--release"
                  onClick={() => {
                    deleteCategory(selDelCatId);
                    dialog.current.close();
                  }}
                >
                  Delete Category
                </button>
                <br></br>
                <button
                  className="btn--release"
                  onClick={() => {
                    props.history.push(`/categories`);
                    dialog.current.close();
                  }}
                >
                  Cancel Delete
                </button>
              </div>
            </dialog>
      {categories.map((cat) => {
        console.log("cat: ", cat);
        return (
          <>
<<<<<<< HEAD
            {/* <div style={({ height: "200px" }, { fontSize: "14px" })}> */}
            <dialog ref={dialog}>
              <div>
                Are you sure, you want to delete this Tag?
                <button
                  className="btn--release"
                  onClick={() => {
                    deleteCategory(cat.id);
                  }}
                >
                  Delete Tag
                </button>
                <br></br>
                <button
                  className="btn--release"
                  onClick={() => {
                    props.history.push(`/categories`);
                    dialog.current.close();
                  }}
                >
                  Cancel Delete
                </button>
              </div>
            </dialog>
            {/* </div> */}
=======
>>>>>>> 0bfc8219f9d86314e2121fac474600b0d397a618
            <div>
              <p>{cat.label}</p>
              <button
                onClick={() => {
                  getCategory(cat.id).then(
                    props.history.push(`/categories/edit/${cat.id}`)
                  );
                }}
              >
                Edit
              </button>
              <br></br>

              <button
                className="btn--release"
                onClick={() => {
                  dialog.current.showModal();
                  setSelDelCatId(cat.id);
                }}
              >
                Delete Category
              </button>
            </div>
          </>
        );
      
    </>
  );
};

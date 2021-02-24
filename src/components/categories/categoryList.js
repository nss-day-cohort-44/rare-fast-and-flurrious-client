import React, { useContext, useEffect, useRef } from "react";
import { CategoryContext } from "./categoryProvider";

export const CategoryList = (props) => {
  // Delete As a Dialog
  const dialog = useRef();

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
      {categories.map((cat) => {
        return (
          <>
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

import React from "react";
import { Route } from "react-router-dom";
import { ProfileProvider } from "./auth/AuthProvider";
import { Profile } from "./auth/Profile";
import { PostProvider } from "./posts/PostProvider";
import { PostList } from "./posts/PostList";
import { PostDetails } from "./posts/PostDetail";
import { CategoryProvider } from "./categories/categoryProvider";
import { CategoryList } from "./categories/categoryList";
import { CategoryForm } from "./categories/categoryForm";
import { PostForm } from "./posts/PostForm";
import { CommentProvider } from "./comments/CommentProvider";
import { CommentForm } from "./comments/CommentForm";
import { UserPosts } from "./posts/UsersPosts";
import { TagList } from "./tags/TagList";
import { TagForm } from "./tags/TagForm";
import { TagProvider } from "./tags/TagProvider";

export const ApplicationViews = (props) => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      ></main>

      <CategoryProvider>
        <Route
          exact
          path="/categories"
          render={(props) => <CategoryList {...props} />}
        />
        <Route
          exact
          path="/categories/create"
          render={(props) => <CategoryForm {...props} />}
        />
        <Route
          exact
          path="/categories/edit/:categoryId(\d+)"
          render={(props) => <CategoryForm {...props} />}
        />
      </CategoryProvider>

      <ProfileProvider>
        <Route exact path="/" render={(props) => <Profile {...props} />} />
      </ProfileProvider>

      <CategoryProvider>
        <PostProvider>
          <Route
            exact
            path="/posts"
            render={
              /*  props =
                    {
                        match: {},
                        location: {},
                        history: {}
                    }

                        ...props(spread operator) =
                    history: {}
                    match: {}
                    location: {}
                    */
              (props) => <PostList {...props} />
            }
          />
          <Route
            exact
            path="/myposts"
            render={(props) => <UserPosts {...props} />}
          />
          <Route
            exact
            path="/posts/:id(\d+)"
            render={(props) => <PostDetails {...props} />}
          />
          <Route
            exact
            path="/PostForm"
            render={(props) => <PostForm {...props} />}
          />
          <Route
            path="/Posts/edit/:postId(\d+)"
            render={(props) => <PostForm {...props} />}
          />
        </PostProvider>
      </CategoryProvider>

      <TagProvider>
        <Route exact path="/tags" render={(props) => <TagList {...props} />} />
        <Route
          exact
          path="/tags/create"
          render={(props) => <TagForm {...props} />}
        />
        <Route
          path="/tags/edit/:tagId(\d+)"
          render={(props) => <TagForm {...props} />}
        />
      </TagProvider>

      <CommentProvider>
        <Route
          path="/CommentForm"
          render={(props) => <CommentForm {...props} />}
        />
      </CommentProvider>
    </>
  );
};

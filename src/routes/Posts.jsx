/**
 * Refactored into the routes directoy ... 
 * App.jsx IS loaded as route, therefore makes more sense to be in the routes directory
 */

// Root component
import { Outlet } from "react-router-dom";
import PostsLists from "../components/PostsList";

function Posts() {

  return (
    <>
      {/* Add an outlet, becsue child routes have been added to this component under main.jsx */}
      <Outlet />
      <main>
        <PostsLists />
      </main>
    </>
  );
}

export default Posts;


// function that will be assigned to the loader property under main.jsx router definition
// if the loader is a asyc function, then the Router WAITS for the response before loading anything
export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();

  return resData.posts;
}
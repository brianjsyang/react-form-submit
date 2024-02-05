import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from './PostsLists.module.css';


function PostsLists() {
    // data is fetched by React Router's loader function.
    // Whatever is returned in the loader function is accessible through the useLoaderData hook
    const posts = useLoaderData(); 


    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((each_post) =>
                        <Post key={each_post.id} id={each_post.id} author={each_post.author} body={each_post.body} />
                    )}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: '#ffffff'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Start adding some using the New Post button.</p>
                </div>
            )}
        </>
    )
}

export default PostsLists
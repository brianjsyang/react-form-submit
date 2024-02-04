import Post from "./Post";
import NewPost from './NewPost';
import Modal from "./Modal";
import classes from './PostsLists.module.css';
import { useState } from "react";



function PostsLists({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        /**
         * triggered when a new post is submitted
         * Insert the new post first, and spread already existing posts as well
         */
        //setPosts([postData, ...posts]); // not optimal as the new state is built off of already existing state ... instead,
        setPosts((existingPosts) => [postData, ...existingPosts]); // call the arrow function that will be called by React whenever setPost
        // above method looks similar, but technically better for updating the state
        // internally, making sure React calls the latest version of the state.
    }


    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting} onAddPost={addPostHandler}/>
                </Modal>
            )}

            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((each_post, index) =>
                        <Post key={index} author={each_post.author} body={each_post.body} />
                    )}
                </ul>
            )}
            {posts.length == 0 && (
                <div style={{textAlign: 'center', color: '#ffffff'}}>
                    <h2>There are no posts yet!</h2>
                    <p>Start adding some using the New Post button.</p>
                </div>
            )}
        </>
    )
}

export default PostsLists
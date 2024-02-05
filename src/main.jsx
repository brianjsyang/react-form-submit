import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Posts, { loader as postsLoader} from './routes/Posts'
import NewPost, { action as newPostAction} from './routes/NewPost'
import PostDetails, { loader as postDetailsLoader} from './routes/PostDetails'
import RootLayout from './routes/RootLayout'
import './index.css'

const router = createBrowserRouter([
  // list of route definition
  { 
    path: '/', 
    element: <RootLayout />,
    children: [
      { 
        path: '/', 
        element: <Posts />,
        loader: postsLoader, // function that runs UPON the path is called.
        children: [
          // make the New Post Modal as child of list of posts element, this will make the modal show on top of lists of posts UI
          { 
            path: '/create-post', 
            element: <NewPost />,
            action: newPostAction // triggers function on FORM SUBMISSION
          },
          {
            path: '/:postId',  // dynamic route!
            element: <PostDetails />,
            loader: postDetailsLoader,
          }
        ]
      },
    ],
  }, // layout that wraps all routes, no matter the element
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

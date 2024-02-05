/**
 * Refactored into the routes directory
 * Defined as one of the routes under main.jsx
 */
import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';


function NewPost() {

  return (
    <Modal>
      <Form method='POST' className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/* the name attribue is used by the React Router to use in the action function */}
          <textarea id="body" name="body" required rows={3} /> 
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;


// function to be executed by React Router, as defined under main.jsx
export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // { body: '...', author: '...' }. Based off of the name attribute!

  /**
   * Fetch data ... this example, just use the local host
   * POST: upload to the server.
   */
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
        'Content-Type': 'application/json'
    }
  });

  return redirect('/'); // after form submission, make React Router redirect.
}
import { useState } from 'react';
import classes from './NewPost.module.css';

// Create new post through Form Submition

function NewPost({ onCancel, onAddPost }) {
  // always returns two values
  //stateData[0] // current value
  //stateData[1] // state updating function ... calling the updating function, also calles the component function again! a.k.a Re-render the component
  // state registered
  const [ enteredBody, setEnteredBody ] = useState('');       // returns an array based on initial value
  const [ enteredAuthor, setEnteredAuthor] = useState('');

  // updating the text
  function bodyChangeHandler(event) {
      // call the state updating function, which will update the "enteredBody" variable
      setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
      setEnteredAuthor(event.target.value)
  }


  // Form submit action
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData); // onAddPost function runs the addPostHandler function from parent
    onCancel(); // after submit, execute function to close the modal.
  }


  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} /> 
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler}/>
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
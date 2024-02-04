// Root component
import MainHeader from "./components/MainHeader";
import PostsLists from "./components/PostsList";
import { useState } from "react";

function App() {
  const [ modalIsVisible, setModalIsVisible] = useState(false);    // by default, modal is not visible!

  // Modal state update
  function showModalHandler() {
    setModalIsVisible(true);
  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <main>
        <PostsLists 
          isPosting={modalIsVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
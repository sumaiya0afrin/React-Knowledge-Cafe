import "./App.css";
import Header from "./components/Header";
import Bookmarks from "./components/Bookmarks";
import Blogs from "./components/Blogs";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBook = [...bookmarks, blog];
    setBookmarks(newBook);
  };
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-6">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;

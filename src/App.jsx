import "./App.css";
import Header from "./components/Header";
import Bookmarks from "./components/Bookmarks";
import Blogs from "./components/Blogs";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBook = [...bookmarks, blog];
    setBookmarks(newBook);
  };

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);
    console.log(id);
    const remainingBookMark = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBookMark);
  };
  return (
    <>
      <Header></Header>
      <div className="lg:grid lg:grid-cols-3 w-4/5 mx-auto gap-6 my-6">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadingTime={handleReadingTime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;

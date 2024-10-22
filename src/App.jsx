import "./App.css";
import Header from "./components/Header";
import Bookmarks from "./Bookmarks";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-6">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;

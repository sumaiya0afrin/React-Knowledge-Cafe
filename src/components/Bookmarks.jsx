import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-200 border border-[#6047EC] rounded-lg p-5">
        <h3 className="text-[#6047EC] font-semibold text-xl">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="bg-gray-200 rounded-lg p-5">
        <h2 className="text-xl font-semibold mb-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        <span className="font-semibold">
          {bookmarks.map((bookmark, idx) => (
            <Bookmark key={idx} bookmark={bookmark}></Bookmark>
          ))}
        </span>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;

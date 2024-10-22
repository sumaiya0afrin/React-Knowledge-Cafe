import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  return (
    <div>
      <p className="bg-white rounded-lg p-4 mb-3">{bookmark.blog_title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;

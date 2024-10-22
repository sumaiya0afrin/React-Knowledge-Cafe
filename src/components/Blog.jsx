import PropTypes from "prop-types";
import { GoBookmark } from "react-icons/go";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  return (
    <div className="space-y-5 mb-12">
      <img className="rounded-lg" src={blog.thumb_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 lg:gap-5">
          <img className="w-8 lg:w-16" src={blog.author_img} alt="" />
          <div>
            <h4 className="lg:text-2xl font-bold">{blog.author_name}</h4>
            <p className="font-semibold text-[#11111199]">{blog.posted_date}</p>
          </div>
        </div>
        <div className="flex gap-1">
          <p>{blog.read_time} min read</p>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="text-2xl"
          >
            <GoBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-xl lg:text-4xl font-bold">{blog.blog_title}</h2>
      <p className=" space-x-1">
        {blog.hashtags.map((hashtag, idx) => (
          <span key={idx}>
            <a href="" className="text-[#11111199]">
              {hashtag}{" "}
            </a>
          </span>
        ))}
      </p>

      <button
        onClick={() => handleReadingTime(blog.read_time, blog.id)}
        className="text-[#6047EC] underline"
        href="#"
      >
        Mark as Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
  handleAddToBookmark: PropTypes.func,
  handleReadingTime: PropTypes.func,
};
export default Blog;

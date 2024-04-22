import PropTypes from "prop-types";
import { IoBookmark } from "react-icons/io5";
const Blog = ({ blog, handleBookmarks, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    reading_time,
    author_img,
    hashtags,
    posted_date,
  } = blog;

  return (
    <div className="mb-20 space-y-4">
      <img
        className="w-full mb-8"
        src={cover}
        alt={"cover picture of the title"}
      />
      <div className="flex justify-between mb-4 space-y-4">
        <div className="flex">
          <img className="w-14" src={author_img} alt="" />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time}min read</span>

          <button
            onClick={() => handleBookmarks(blog)}
            className="ml-2 text-red-300"
          >
            <IoBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="my-4" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className="text-purple-400 font-bold underline"
      >
        Mark as Read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func
};
export default Blog;

import PropTypes from "prop-types";
import Blog from "../Blog/Blog.jsx";
import { useState } from "react";
import { useEffect } from "react";

const Blogs = ({ handleBookmarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 ">
      <h1 className="text-4xl">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleBookmarks={handleBookmarks}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
  handleBookmarks: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};

export default Blogs;

import PropTypes from "prop-types";

const Bookmarks = () => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-4xl">Bookmarked Blogs : </h2>
    </div>
  );
};
Bookmarks.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Bookmarks;

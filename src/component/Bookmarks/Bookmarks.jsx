
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-stone-400 rounded-lg">
      <h2 className="text-2xl text-center ">Bookmarked Blogs : {bookmarks.length} </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
}

Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks


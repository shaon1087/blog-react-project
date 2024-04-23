import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks';
import Header from './component/Header/Header'

function App() {
  // declaring all the states here
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);




  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from the bookmarks
   const remainingBookmarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
   setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto m-8 gap-8">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleBookmarks={handleBookmarks}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}


export default App;

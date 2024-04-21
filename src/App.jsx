import { useState } from 'react';
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks';
import Header from './component/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto m-8'>
        <Blogs handleBookmarks={handleBookmarks}></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}


export default App;

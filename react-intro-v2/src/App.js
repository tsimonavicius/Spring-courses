import React from 'react';
import './App.css';
import Post from './components/Post/Post';

// getAllPosts - returns array of posts
const responseFromRest = [
  {
    postMainText: "This is a Post",
    imgUrl: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    userName: "Andrius"
  },
  {
    postMainText: "This is another post",
    imgUrl: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    userName: "Jonas"
  },
  {
    postMainText: "This is the third post",
    imgUrl: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    userName: "Indiana Jones"
  },
  {
    postMainText: "This is another post",
    imgUrl: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
    userName: "Jonas"
  },
]

const App = () => {
  return (
    <div className="App">
      {responseFromRest.map((post, index) =>
       <Post
         postMainText={post.postMainText}
         imgUrl={post.imgUrl}
         userName={post.userName}
         isOdd={index % 2 === 0}
       />
      )}
    </div>
  );
}

export default App;

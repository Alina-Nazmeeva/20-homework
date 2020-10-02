import React from 'react';
import './App.css';
import PostForm from './components/Posts/PostForm';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <div className="container">
        <PostForm />
        <Posts />
      </div>
    </div>
  );
}

export default App;
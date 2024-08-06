import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  const youtubeUrl = 'https://www.youtube.com/watch?v=GsYPqOPpk1o'; // Replace with your YouTube video URL

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Click here to Learn React </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <VideoPlayer url={youtubeUrl} />
      </header>
    </div>
  );
}

export default App;

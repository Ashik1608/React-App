import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';

function App() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to EduPlatform</h1>
        <p className="lead">This is an innovative education platform designed to provide modern learning solutions.
          Click here to Sign Up </p>
        <hr className="my-4" />
        <p>Click the button below to learn more:</p>
        <a className="btn btn-primary btn-lg" href="https://your-education-platform.com" role="button">Learn more</a>
      </div>
    </div>
  );
}

export default App;


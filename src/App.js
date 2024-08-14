import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';


function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}
const user = {
  name: 'Ashik',
  imageUrl: 'https://i.imhttps://media.licdn.com/dms/image/D5603AQEDVagrSj4ihg/profile-displayphoto-shrink_400_400/0/1679736197966?e=1729123200&v=beta&t=qegZ3-mcPArsI7AogMZiXrEtYsjdMt97Lf15HJeYVyggur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to EduPlatform</h1>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
        ></img>
        <p className="lead">This is an innovative education platform designed to provide modern learning solutions.
          Click here to Sign Up </p>
        <hr className="my-4" />
        <p>Click the button below to learn more:</p>

        <a className="btn btn-primary btn-lg" href="https://your-education-platform.com" role="button">Learn more</a>
        <div>
          <h1>Welcome to my app</h1>
          <MyButton />
          <AboutPage />

        </div>

      </div>
    </div>

  );
}


export default App;


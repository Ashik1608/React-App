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
  imageUrl: 'https://www.google.com/imgres?q=images&imgurl=https%3A%2F%2Fimages.ctfassets.net%2Fhrltx12pl8hq%2F28ECAQiPJZ78hxatLTa7Ts%2F2f695d869736ae3b0de3e56ceaca3958%2Ffree-nature-images.jpg%3Ffit%3Dfill%26w%3D1200%26h%3D630&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fdiscover%2Ffree-nature-images&docid=uEeA4F2Pf5UbvM&tbnid=0E5dDA82VanW3M&vet=12ahUKEwjHktSrkfqHAxUtSWwGHaWIEyYQM3oECHcQAA..i&w=1200&h=630&hcb=2&ved=2ahUKEwjHktSrkfqHAxUtSWwGHaWIEyYQM3oECHcQAA'
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


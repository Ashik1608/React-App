// src/VideoPlayer.js
import React from 'react';
import './VideoPlayer.css'; // Optional: Create a CSS file for styling

const VideoPlayer = ({ url }) => {
    return (
        <div className="video-container">
            <iframe
                width="560"
                height="315"
                src={'https://www.youtube.com/watch?v=GsYPqOPpk1o'}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;

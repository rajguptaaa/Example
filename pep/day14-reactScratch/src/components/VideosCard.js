import { useNavigate } from 'react-router';
import './VideosCard.css';
import React from 'react';

const VideosCard = ({ video }) => {
    const navigate = useNavigate();

    const handleCLick = () => {
        navigate(`/video/${video.video_id}`);
    }
    return (
        <div className='video-card' onClick={handleCLick}>
            <img src={video.thumbnails[0].url} alt="Thumbnail" className='thumbnail-css'/> 
            <div className='video-des-card'>
            <h4>{video.title}</h4>
            <p>Description: {video.description}</p>
            <p>Author: {video.author}</p>
            <p>Views: {video.number_of_views}</p>
            <p>Published: {video.published_time}</p>
            <p>Length: {video.video_length}</p>
            </div>
        </div>
    );
};

export default VideosCard;



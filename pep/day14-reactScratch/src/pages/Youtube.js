import React, { useEffect } from 'react';
import { useState } from 'react';
import VideosCard from '../components/VideosCard';
import './Youtube.css';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4873f19498msh6f4de67b5626175p14c464jsnc00dc4a06f5f',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

const fetchVideos = async () => {
    try{
        const response = await fetch("https://youtube138.p.rapidapi.com/auto-complete/?q=desp&hl=en&gl=US", options);
        if(response.ok){
            const data = await response.text();
            console.log(data);
        }
    }catch(e){
        console.log(error);
        return [];
    }
}
const Youtube = () => {
    const [videos, setVideos] = useState([]);

    useEffect(()=>{
        const getVideos = async () => {
            const videosData = await fetchVideos();
            setVideos(videosData);
        }
            getVideos()
    },[])
        return(
            <div className='youtube-container'>
                <h1>Youtube</h1>
                <div className='video-container'></div>
                {videos && videos.map((video)=>{
                    <VideosCard key={video.video_video_video.id} video={video} />

                })}
            </div>

        );
};

export default Youtube;
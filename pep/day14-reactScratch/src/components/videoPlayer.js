import React from 'react';
import { useParams } from 'react-router';
export default function VideoPlayer (){
    const {videoId} = useParams();
    return(
        <div>
        <iframe 
            width="560"
            height="360"
            src={`https://www.youtube.com/embed/${videoId}/?autoplay=1`}
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='Video Player'
        />
        </div>
    );
};

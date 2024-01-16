
import React, { useEffect, useState } from 'react';
import { SlSocialSpotify } from "react-icons/sl";

function Music() {
    const [tracks, setTracks] = useState(null);

    // Fetches data from the server
    useEffect(() => {
    fetch('http://localhost:3000/api/dvddy') //! change to deplayed server url in production
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setTracks(data.tracks.slice(0, 5));
            console.log(data.tracks.slice(0,5)); // Log the data
        })
        .catch(error => console.error('Error:', error));  
    }, []);


    return (
        <div className='flex'>
          <div className='w-1/2'>
            <div className='flex items-start'>
                <SlSocialSpotify size={32}/>
                <h2 className='text-2xl ml-1'>My Current Top Tracks:</h2>
            </div>
            {tracks && tracks.map((track, index) => (
              <div className='flex flex-row bg-gray-400 my-2 h-10 mr-10' key={index}>
                <img src={track.album.images[0]} className='w-10 h-10' alt="album artwork" />
                <h2>{track.name}</h2>
              </div>
            ))}
          </div>
          <div className='w-1/2 mx-5 my-5 items-center'>
            <ul className="list-disc my-5">
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
              <li>Now this is a story all about how, my life got flipped-turned upside down</li>
            </ul>
          </div>
        </div>
      );
}

export default Music;
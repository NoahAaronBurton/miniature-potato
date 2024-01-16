
import React, { useEffect, useState } from 'react';

function Music() {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        fetch('/api/dvddy')
            .then(response => response.json())
            .then(data => setTracks(data.tracks))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <ul>
                {tracks && tracks.map(track => (
                    <li key={track.id}>
                        
                        <p>{track.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Music;
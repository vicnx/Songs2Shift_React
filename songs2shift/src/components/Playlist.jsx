import React from 'react';

export default function Playlist({ name, tracks }) {
  return (
    <div>
      <h3>{name}</h3>
      <ul> TOTAL TRACKS: 
        {tracks.total}
      </ul>
    </div>
  );
}
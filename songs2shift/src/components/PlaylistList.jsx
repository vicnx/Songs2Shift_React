import React from 'react';
import Playlist from './Playlist';
import { Button } from 'primereact/button';

export default function PlaylistList({ playlists, onConvert }) {
  console.log(playlists)
  return (
    <div>
      <h2>Spotify Playlists</h2>
      {playlists.length > 0 ? playlists.map((playlist) => (
        <div key={playlist.id}>
          <Playlist name={playlist.name} tracks={playlist.tracks} />
          <Button onClick={() => onConvert(playlist)}>Convert to Deezer</Button>
        </div>
      )): 'Sin resultados'}
    </div>
  );
}
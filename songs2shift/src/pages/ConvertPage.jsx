import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import useConversion from 'hooks/useConversion';
import PlaylistList from '../components/PlaylistList';
import ConversionButton from '../components/ConversionButton';
import {  useNavigate } from 'react-router';
import useApi from 'hooks/useApi';
import { Button } from 'primereact/button';

const ConvertPage = () => {
  const { saveTokens, spotifyApiKey, deezerApiKey, spotifyPlaylists, getSpotifyPlaylists, spotifyToken} = useApi();
  const { convertPlaylists } = useConversion();
  const [ loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    // Comprobamos que existe el token de spotify para sacar las playlist.
    if (!spotifyToken) {
      saveTokens();
      navigate('/login');
    }else{
      getSpotifyPlaylists();
    }
  }, [spotifyToken]);

  const convertPlaylist = async (playlist) => {
    setLoading(true);
    await convertPlaylists(playlist, deezerApiKey);
    setLoading(false);
  };

  return (
    <div className="p-grid p-fluid">
      <div className="p-col-12">
        <h2>Playlists de Spotify</h2>
        <PlaylistList
          playlists={spotifyPlaylists}
          renderItem={(playlist) => (
            <ConversionButton
              label="Convertir"
              onClick={() => convertPlaylist(playlist)}
            />
          )}
        />
      </div>
      {loading && (
        <div className="p-col-12 p-my-4">
          <ProgressBar mode="indeterminate" style={{ height: '6px' }} />
        </div>
      )}
    </div>
  );
};

export default ConvertPage;
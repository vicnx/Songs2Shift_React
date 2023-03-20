import { useState } from "react";
import { convertPlaylist } from "../services/DeezerApi";

export default function useConversion() {
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState(null);

  const convertPlaylistToDeezer = async (playlistId, accessToken) => {
    try {
      setIsConverting(true);
      await convertPlaylist(playlistId, accessToken);
      setIsConverting(false);
      setError(null);
    } catch (err) {
      setIsConverting(false);
      setError(err.message);
    }
  };

  return {
    isConverting,
    error,
    convertPlaylistToDeezer,
  };
}
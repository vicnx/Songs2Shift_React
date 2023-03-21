import { CONSTANTS } from "global/constants";
import axios from 'axios';

const SpotifyService = {
  async getPlaylists(token) {
    try {
      const response = await axios.get(`${CONSTANTS.Spotify.apiUrl}/me/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      const err = {
        status: error.response.status,
        message: 'Vuelve a autenticarte en Spotify para continuar.'
      };
      throw err;
    }
  },
  async getUserData(token) {
    try {
      const response = await axios.get(`${CONSTANTS.Spotify.apiUrl}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      const err = {
        status: error.response.status,
        message: 'Vuelve a autenticarte en Spotify para continuar.'
      };
      console.log({ err });
      throw err;
    }
  }
};

export default SpotifyService;

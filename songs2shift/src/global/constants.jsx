
import { REACT_CLIENT_ID, REACT_REDIRECT_URI } from 'apis/apis';
export const CONSTANTS = {
  Spotify:{
    authEndpoint: 'https://accounts.spotify.com/authorize',
    REACT_CLIENT_ID: REACT_CLIENT_ID,
    REACT_REDIRECT_URI: REACT_REDIRECT_URI,
    scopes: ['user-read-private'],
  },
  characters: {
    slash: '/',
    hash: '#'
  }
}
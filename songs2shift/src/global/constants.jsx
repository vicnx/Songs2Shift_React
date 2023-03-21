
import { SPOTIFY_CLIENT_ID, SPOTIFY_REDIRECT_URI, DEEZER_CLIENT_ID, DEEZER_REDIRECT_URI, DEEZER_CLIENT_SECRET } from 'apis/apis';
export const CONSTANTS = {
  title:'Songs2Shift',
  session:{
    types:{
      spotifyToken: 'spotifyToken',
      deezerToken: 'deezerToken',
      spotifyUserData: 'spotifyUserData', 
      deezerUserData: 'deezerUserData' 
    }
  },
  Spotify:{
    apiUrl: 'https://api.spotify.com/v1',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    SPOTIFY_CLIENT_ID: SPOTIFY_CLIENT_ID,
    SPOTIFY_REDIRECT_URI: SPOTIFY_REDIRECT_URI,
    scopes: ['user-read-private'],
    source: 'spotify'

  },
  Deezer:{
    apiUrl: 'https://api.deezer.com',
    DEEZER_CLIENT_ID: DEEZER_CLIENT_ID,
    DEEZER_REDIRECT_URI: DEEZER_REDIRECT_URI,
    DEEZER_CLIENT_SECRET: DEEZER_CLIENT_SECRET,
    source: 'deezer'
  },
  characters: {
    slash: '/',
    hash: '#'
  },
  routes:{
    base: '/',
    home:'/home',
    login: '/login',
    loginDeezer: 'loginDeezer'
  },
  proxy:{
    url:'https://cors-anywhere.herokuapp.com/'
  }
}
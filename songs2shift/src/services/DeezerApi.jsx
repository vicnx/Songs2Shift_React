import { CONSTANTS } from "global/constants";
import axios from 'axios';
import fetchJsonp from "fetch-jsonp";
const DeezerService = {
  async getUserData(token) {
    // TODO Vicente, no se utiliza
    try {
      const response = await axios.get(`${CONSTANTS.proxy.url}${CONSTANTS.Deezer.apiUrl}/user/me`, {
        params: {
          access_token: `${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error)
      const err = {
        status: error.response.status,
        message: 'Vuelve a autenticarte en Deezer para continuar.'
      };
      throw err;
    }
  },
  async getUserDataJSONP(token) {
    const url = `https://api.deezer.com/user/me?access_token=${encodeURIComponent(token)}&output=jsonp`;
    const response = await fetchJsonp(url);
    const dat = await response.json();
    return dat
  }
};

export default DeezerService;

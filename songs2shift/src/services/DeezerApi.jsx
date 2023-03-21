import { CONSTANTS } from "global/constants";
import axios from 'axios';

const DeezerService = {
  async getUserData(token) {
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
  }
};

export default DeezerService;

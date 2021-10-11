import axios from 'axios';
import config from '../config';

function getQueuePosition(clientId) {
  const hostname = window.location.hostname;
  const options = {
    headers: {
      'X-Client-ID': clientId,
    },
  };

  return axios.get(`${config.baseUrl}/queue/${hostname}`, options);
}

export default getQueuePosition;

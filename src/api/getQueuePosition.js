import axios from 'axios';
import config from '../config';

function getQueuePosition(clientId) {
  const options = {
    headers: {
      'X-Client-ID': clientId,
    },
  };

  return axios.get(`${config.baseUrl}/queue/evga`, options);
}

export default getQueuePosition;

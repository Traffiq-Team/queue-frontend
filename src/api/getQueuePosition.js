import axios from 'axios';
import config from '../config';

function getQueuePosition(clientId, appName) {
  const options = {
    headers: {
      'X-Client-ID': clientId,
    },
  };

  return axios.get(`${config.baseUrl}/queue/${appName}`, options);
}

export default getQueuePosition;

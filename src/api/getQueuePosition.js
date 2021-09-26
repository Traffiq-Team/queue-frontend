import axios from 'axios';
import config from '../config';

async function getQueuePosition(clientId) {
  try {
    const { data } = await axios.get(`${config.baseUrl}/queue/evga`, {
      headers: {
        'X-Client-ID': clientId,
      },
    });
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export default getQueuePosition;

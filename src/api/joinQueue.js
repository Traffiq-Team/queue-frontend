import axios from 'axios';
import config from '../config';

async function joinQueue() {
  try {
    const { data } = await axios.post(`${config.baseUrl}/queue/evga`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
}

export default joinQueue;

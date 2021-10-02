import axios from 'axios';
import config from '../config';

function joinQueue() {
  return axios.post(`${config.baseUrl}/queue/evga`);
}

export default joinQueue;

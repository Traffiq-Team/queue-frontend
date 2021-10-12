import axios from 'axios';
import config from '../config';

function joinQueue() {
  const hostname = window.location.hostname;
  return axios.post(`${config.baseUrl}/queue/queueUrl/${hostname}`);
}

export default joinQueue;

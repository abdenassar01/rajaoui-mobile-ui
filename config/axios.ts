import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.sofascore.app/api/v1',
});

export const TEAM_ID = '41757';

export default instance;

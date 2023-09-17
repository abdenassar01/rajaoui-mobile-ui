import instance, {TEAM_ID} from '../config/axios';

const endpoint = `/team/${TEAM_ID}/events`;

export async function nextMatch() {
  const results = await instance.get(`${endpoint}/next/0`);
  return results.data.events[0];
}

export async function lastMatches() {
  const results = await instance.get(`${endpoint}/last/0`);
  return results.data.events.slice(-6, results.data.events.length).reverse();
}

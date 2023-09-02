import instance, {TEAM_ID} from '../config/axios';

const endpoint = `/team/${TEAM_ID}`;

export async function teamDetails() {
  const results = await instance.get(`${endpoint}`);
  return results.data.team;
}

export async function teamPlayers() {
  const results = await instance.get(`${endpoint}/players`);
  return results.data.players;
}

export async function teamForeignPlayers() {
  const results = await instance.get(`${endpoint}/players`);
  return results.data.foreignPlayers;
}

export async function teamNationalPlayers() {
  const results = await instance.get(`${endpoint}/players`);
  return results.data.nationalPlayers;
}

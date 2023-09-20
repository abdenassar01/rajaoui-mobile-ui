import instance from '../config/axios';

const endpoint = '/player/';

export async function playerDetails(id: string) {
  const results = await instance.get(`${endpoint}/${id}`);
  return results.data.player;
}

export async function playerPerformanceByEvent(event: string, player: string) {
  const results = await instance.get(
    `/event/${event}/player/${player}/statistics/`,
  );

  return results.data;
}

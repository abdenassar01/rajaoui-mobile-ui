import instance from '../config/axios';

const endpoint = '/manager';

export async function managerDetails(id: string) {
  const results = await instance.get(`${endpoint}/${id}`);
  return results.data.manager;
}

import axios from 'axios';

export const getBookSummaries = () => axios.get('/data/list.json');

export const getBookByID = (id) => {
  const bookKey = `id-${id}`;

  return axios.get(`/data/${bookKey}.json`);
};

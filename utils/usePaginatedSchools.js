const { useQuery } = require('react-query');
import axios from 'axios';

export default function useSchools(page, perPage) {
  return useQuery(['schools', page, perPage], async () => {
    const res = await axios.get(`/api/schools?perPage=${perPage}&page=${page}`);
    return res.data;
  });
}

import axios from 'axios';
import { useEffect, useState } from 'react';

const useFeatch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '70a9726cdcmsh68a00ca65143ae7p10f690jsn6fcfdab8af8f',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query }
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
     

}, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFeatch;

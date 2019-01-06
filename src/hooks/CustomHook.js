import basicAuthHeader from 'helpers/basicAuthen';
import { useState, useEffect } from 'react';
import { getOr } from 'lodash/fp';
export const useFetchData = props => {
  const [data, setData] = useState({ isLoading: true, data: {} });

  useEffect(() => {
    const fetchData = async() => {
      setData({ data: {}, isLoading: true });
      const authKey = getOr({}, props.type, props.config);
      const opts = authKey ? { headers: basicAuthHeader(authKey) } : {};
      const response = await fetch(props.url, opts);
      const json = await response.json();
      setData({ data: json, isLoading: false });
    };
    // Get data
    fetchData();
    props.interval && setInterval(fetchData, props.interval);
  }, []);

  return data;
};

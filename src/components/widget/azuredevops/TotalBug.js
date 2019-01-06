// https://dev.azure.com/yulsaria/yulsaria/_apis/wit/wiql/8644e64e-aec2-4d98-ab58-c7f8b96f5d66
import React, { useContext } from 'react';
import { useFetchData } from 'hooks/CustomHook';
import AppContext from 'components/AppContext';

function NumberOfBug(props) {
  const { queryId, organize, project, interval = 10000 } = props;
  const url = `https://dev.azure.com/${organize}/${project}/_apis/wit/wiql/${queryId}`;
  const config = useContext(AppContext);
  const { data } = useFetchData({ type: 'vsts', url, config, interval });

  return <span>TOTAL OF BUG: {data.workItems && data.workItems.length} </span>;
}

export default NumberOfBug;

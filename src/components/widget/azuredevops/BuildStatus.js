import React, { useContext } from 'react';
import { useFetchData } from 'hooks/CustomHook';
import AppContext from 'components/AppContext';

function NumberOfBug(props) {
  const { buildDefinition, organize, project, interval = 10000 } = props;
  const url = `https://dev.azure.com/${organize}/${project}/_apis/build/latest/${buildDefinition}`;
  const config = useContext(AppContext);
  const { data } = useFetchData({ type: 'vsts', url, config, interval });
  // TODO: change to result data base on result:
  return <span> {data.result} </span>;
}

export default NumberOfBug;

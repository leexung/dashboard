import React, { useContext } from 'react';
import { useFetchData } from 'hooks/CustomHook';
import { filter, getOr, head } from 'lodash/fp';
import CONSTANTS from 'constants/AppConstants';
import AppContext from 'components/AppContext';
import LoadingBar from 'components/common/LoadingBar';
const { FAILED_STATUS, SUCESS_STATUS } = CONSTANTS;

function BuildQueue(props) {
  const { buildDefinition, organize, project, interval = 10000 } = props;
  const url = `https://dev.azure.com/${organize}/${project}/_apis/build/builds?definitions=${buildDefinition}`;
  const config = useContext(AppContext);
  const { data, isLoading } = useFetchData({ type: 'vsts', url, config, interval });
  const definition = getOr({}, 'definition', head(data.value));
  const buildSucceeded = filter(item => item.result === SUCESS_STATUS, data.value);
  const buildFailed = filter(item => item.result === FAILED_STATUS, data.value);
  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <>
          <h2>Build name: {definition.name}</h2>
          <div> Total: {data.count} </div>
          <div> Succeeded: {buildSucceeded.length} </div>
          <div> Failed: {buildFailed.length} </div>
        </>
      )}
    </>
  );
}

export default BuildQueue;

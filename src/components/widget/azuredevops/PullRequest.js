import React, { useContext } from 'react';

import { useFetchData } from 'hooks/CustomHook';
import { filter, getOr, head } from 'lodash/fp';
import CONSTANTS from 'constants/AppConstants';
import AppContext from 'components/AppContext';
import LoadingBar from 'components/common/LoadingBar';
const { FAILED_STATUS, SUCESS_STATUS } = CONSTANTS;

function PullRequest(props) {
  const { repositoryId, organize, interval = 10000 } = props;
  const url = `https://dev.azure.com/${organize}/_apis/git/repositories/${repositoryId}/pullRequests`;
  const config = useContext(AppContext);
  const { data, isLoading } = useFetchData({ type: 'vsts', url, config, interval });
  return (
    <>
      {isLoading ? (
        <LoadingBar />
      ) : (
        <ul>
          {data.value.map(item => (
            <li key={item.pullRequestId}>
              <span>
                Name:<a href={item.url}>{item.title}</a>
              </span>
              <span>Creator: {item.createdBy.displayName} </span>
              <span>Assign: {item.createdBy.displayName}. </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default PullRequest;

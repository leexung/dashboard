// @flow
import React, { Component } from 'react';
type typeProps = {};
import PullRequest from './widget/azuredevops/PullRequest';
import NumberOfPullRequest from './widget/azuredevops/NumberOfPullRequest';
import NumberOfPR from './widget/bitbucket/NumberOfPR';
import NumberOfBugJira from './widget/jira/NumberOfBug';
import BuildStatus from './widget/azuredevops/BuildStatus';
import BuildQueue from './widget/azuredevops/BuildQueue';
import TotalBug from './widget/azuredevops/TotalBug';
import config from 'env';
import AppContext from 'components/AppContext';

export default class App extends Component<typeProps> {
  render() {
    return (
      <AppContext.Provider value={config}>
        <div>
          <h1>Hello there World!</h1>
          <BuildStatus buildDefinition={1} organize='yulsaria' project='yulsaria' />
          <hr />
          <BuildQueue buildDefinition={1} organize='yulsaria' project='yulsaria' />
          <hr />
          <PullRequest buildDefinition={1} organize='yulsaria' repositoryId='25413a50-66f7-4eaf-87b0-c4f2959c8752' />
          <hr />
          <TotalBug organize='yulsaria' project='yulsaria' queryId='8644e64e-aec2-4d98-ab58-c7f8b96f5d66' />
          <hr />
        </div>
      </AppContext.Provider>
    );
  }
}

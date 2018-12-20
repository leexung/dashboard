// @flow
import React, { Component } from 'react';
import Input from './Input';
type typeProps = {};
import NumberOfBug from './widget/azuredevops/NumberOfBug';
import NumberOfPullRequest from './widget/azuredevops/NumberOfPullRequest';
import NumberOfPR from './widget/bitbucket/NumberOfPR';
import NumberOfBugJira from './widget/jira/NumberOfBug';
export default class App extends Component<typeProps> {
  render() {
    return (
      <div>
        <h1>Hello there World!</h1>
        <Input type='text' />

        <NumberOfPR />
        <hr/>
        <NumberOfBugJira/>
      </div>
    );
  }
}

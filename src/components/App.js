// @flow
import React, { Component } from 'react';
import Input from './Input';
type typeProps = {};
// commit = 3
// git commit 4
export default class App extends Component<typeProps> {
  render() {
    return (
      <div>
        <h1>Hello there World!</h1>
        <Input type='text'/>
      </div>
    );
  }
}

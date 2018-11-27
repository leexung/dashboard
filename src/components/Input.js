import React, { Component } from 'react';

type inputProps = {};

export default class Input extends Component<inputProps> {
  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
  }
  onChange = () => {};
  render() {
    return <input onChange={this.onChange} value={this.state.value} />;
  }
}

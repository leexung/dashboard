import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChange } from 'actions/index';

const mapStateToProps = state => {
  return { value: state.inputReducer.value };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: value => dispatch(onChange(value))
  };
};

type inputProps = {};

export class Input extends Component<inputProps> {
  constructor(props) {
    super(props);
  }
  onChange = e => {
    const value = e.target.value;
    this.props.onChange(value);
  };
  render() {
    return <input onChange={this.onChange} value={this.props.value} type={this.props.type} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
// git commit 4

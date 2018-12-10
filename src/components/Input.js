import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onChange } from '../actions/index';

const mapStateToProps = state => {
  return { value: state.value  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: article => dispatch(onChange(article))
  };
};

type inputProps = {};
// edit something
export class Input extends Component<inputProps> {
  constructor(props) {
    super(props);
  }
  onChange = e => {
    const value = e.target.value;
    this.props.onChange(value);
  };
  render() {
    const value = this.props.value || 1;
    return <input onChange={this.onChange} value={value} type={this.props.type} />;
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);

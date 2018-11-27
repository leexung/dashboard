import { shallow } from 'enzyme';
import React from 'react';
import Input from '../Input';
describe('Input', () => {
  test('Only 1 input with props value 1 by default', () => {
    const swapper = shallow(<Input />);
    expect(swapper).toMatchSnapshot();
  });
});

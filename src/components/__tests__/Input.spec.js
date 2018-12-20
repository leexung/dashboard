import { shallow, mount } from 'enzyme';
import React from 'react';
import ConnectInput, { Input } from '../Input';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { onChange } from '../../actions/index';
import rootReducer from '../../reducers/index';
import renderer from 'react-test-renderer';

describe('>>>INPUT --- Snapshot', () => {
  let container;

  beforeEach(() => {
    container = shallow(<Input />);
  });

  test('+++ Only 1 input with props value 1 by default', () => {
    expect(container.html()).toMatchSnapshot();
  });
});

describe('>>> INPUT--- REACT-REDUX (Mount + wrapping in <Provider>)', () => {
  const initialState = { value: 10 };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <ConnectInput type='text' />
      </Provider>
    );
  });

  it('+++ render the connected(Input) component', () => {
    expect(wrapper.find(Input).length).toEqual(1);
  });

  it('+++ check Prop matches with initialState', () => {
    expect(wrapper.find(Input).prop('value')).toEqual(initialState.value);
  });

  it('+++ check action on dispatching ', () => {
    let action;
    store.dispatch(onChange(500));
    action = store.getActions();
    expect(action[0].type).toBe('CHANGE_VALUE');
  });
});
describe('>>>H O M E --- REACT-REDUX (actual Store + reducers) more of Integration Testing', () => {
  let store, wrapper;
  const initialState = { value: 10 };

  beforeEach(() => {
    store = createStore(rootReducer);
    wrapper = mount(
      <Provider store={store}>
        <ConnectInput type='text' />
      </Provider>
    );
  });

  it('+++ check Prop matches when  casll dispatch', () => {
    const EXPECT = 500;
    store.dispatch(onChange(EXPECT));
    expect(wrapper.find('input').prop('value')).toBe(500);
    // TODO:
  });

  it('+++ check Prop when change input', () => {
    const input = wrapper.find(Input);
    input.simulate('change', { target: { value: 500 } });
    expect(wrapper.find(Input).prop('value')).toBe(500);
  });
});

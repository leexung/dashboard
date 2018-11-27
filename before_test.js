global._ = require('lodash/fp');
global.matchMedia =
  global.matchMedia ||
  (() => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    };
  });
require('jest-enzyme');
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';

Enzyme.configure({ adapter: new Adapter() });

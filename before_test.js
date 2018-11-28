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
var Enzyme = require('enzyme');
var Adapter = require( 'enzyme-adapter-react-16.3');

Enzyme.configure({ adapter: new Adapter() });

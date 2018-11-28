const initialState = {
  value: 1
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return action.value;
    default:
      return state;
  }
};

export default rootReducer;

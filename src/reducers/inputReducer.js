const initialState = {
  value: 1
};
export default function inputReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return { value: action.value };
    default:
      return state;
  }
}
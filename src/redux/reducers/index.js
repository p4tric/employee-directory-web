import * as types from '../types';

const initialState = {
  loading: false,
  position: '',
  employeeTree: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EMPLOYEE_POSITION:
      return { ...state, position: action.payload };
    case types.SET_EMPLOYEE_TREE:
      return { ...state, employeeTree: { ...state.employeeTree, ...action.payload } };
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default reducer;

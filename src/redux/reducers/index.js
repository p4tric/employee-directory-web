import * as types from '../types';

const initialState = {
  movies: null,
  movieDetail: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_MOVIE_LIST:
      return { ...state, loading: false, movies: action.payload };
    case types.SET_MOVIE_DETAIL:
      return { ...state, loading: false, movieDetail: action.payload };
    default:
      return state;
  }
};

export default reducer;

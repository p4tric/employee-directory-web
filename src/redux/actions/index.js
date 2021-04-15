import {
  fetchMovieList
} from '@service/api/movies';

import * as types from '../types';

export const getMovieList = (payload) => async (dispatch) => {

  dispatch({
    type: types.SET_LOADING,
    payload: true,
  });

  const res = await fetchMovieList(payload);
  dispatch({
    type: types.SET_MOVIE_LIST,
    payload: res,
  })

  return res;
};

export const setLoading = (payload) => (dispatch) => {
  dispatch({
    type: types.SET_LOADING,
    payload,
  })
  return payload;
};

export const setMovieList = (payload) => (dispatch) => {
  dispatch({
    type: types.SET_MOVIE_LIST,
    payload,
  })
  return payload;
};

export const setMovieDetail = (payload) => (dispatch) => {
  dispatch({
    type: types.SET_MOVIE_DETAIL,
    payload,
  })
  return payload;
};

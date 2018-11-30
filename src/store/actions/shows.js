import axios from 'axios';

import {
  GET_ALL_SHOWS,
  GET_SHOW,
  LOADING,
  SORT_SHOWS
} from './types';

export const getShows = (sortKey) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`http://api.tvmaze.com/search/shows?q=batman`)
    .then(res => {
      dispatch({
        type: GET_ALL_SHOWS,
        payload: res.data
      })
    }).then(() => dispatch(sortShows(sortKey)))
};

export const getShow = (showId) => dispatch => {
  dispatch(setLoading());
  axios
    .get(`http://api.tvmaze.com/shows/${showId}`)
    .then(res => {
      dispatch({
        type: GET_SHOW,
        payload: res.data
      })
    })
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};

export const sortShows = (sortKey) => {
  return {
    type: SORT_SHOWS,
    payload: sortKey
  };
};
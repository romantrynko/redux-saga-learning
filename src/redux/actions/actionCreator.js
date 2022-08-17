import {
  DECREASE_COUNT,
  GET_LATEST_NEWS,
  INCREASE_COUNT,
  SET_LATEST_NEWS
} from '../reducers/constants';

export const increaseCount = () => ({
  type: INCREASE_COUNT
});

export const decreaseCount = () => ({
  type: DECREASE_COUNT
});

export const getLatestNews = () => ({
  type: GET_LATEST_NEWS
});

export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload
});

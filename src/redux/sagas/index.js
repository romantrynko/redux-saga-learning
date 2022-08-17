import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
  select,
  fork
} from 'redux-saga/effects';
import { getLatestNews, getPopularNews } from '../../api';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';
import { GET_NEWS } from '../reducers/constants';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* handlePopularNews() {
  const { hits } = yield call(getPopularNews, 'react');
  yield put(setPopularNews(hits));
}

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews)
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}

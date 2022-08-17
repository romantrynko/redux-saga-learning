import {
  take,
  takeEvery,
  takeLatest,
  takeLeading,
  put,
  call,
  select
} from 'redux-saga/effects';
import { getLatestNews } from '../../api';
import { setLatestNews } from '../actions/actionCreator';
import { GET_LATEST_NEWS } from '../reducers/constants';

export function* handleLatestNews() {
  const { hits } = yield call(getLatestNews, 'react');
  yield put(setLatestNews(hits));
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield watchClickSaga();
}

import {
  // take,
  takeEvery,
  // takeLatest,
  // takeLeading,
  put,
  call,
  // select,
  fork,
  take,
  all
  // all,
  // race,
  // spawn
} from 'redux-saga/effects';
import { getLatestNews, getPopularNews } from '../../api';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';
import {
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR
} from '../reducers/constants';

export function* handleLatestNews() {
  try {
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch {
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: 'Error fetching latest news'
    });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews, 'react');
    yield put(setPopularNews(hits));
  } catch {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: 'Error fetching popular news'
    });
  }
}

// export function* handleNews() {
//   yield fork(handleLatestNews);
//   yield fork(handlePopularNews);
//   // yield all([call(handleLatestNews), call(handlePopularNews)]);
//   // yield race([call(handleLatestNews), call(handlePopularNews)]);
// }

export function* watchPopularNews() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}

export function* watchLatestNews() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

// export function* watchClickSaga() {
//   // yield takeEvery(GET_NEWS, handleNews);
// }

export default function* rootSaga() {
  yield all([fork(watchPopularNews), fork(watchLatestNews)]);
}

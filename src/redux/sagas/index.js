import { take, takeEvery, takeLatest, takeLeading, select } from 'redux-saga/effects';
import { DECREASE_COUNT, INCREASE_COUNT } from '../reducers/constants';

const delay = (time) =>
  new Promise((res, rej) => {
    setTimeout(res, time * 1000);
  });

export function* workerSaga() {
  const count = yield select(({ counter }) => counter.count);
  yield delay(2);
  console.log(`workerSaga increase ${count}`);
}

export function* watchClickSaga() {
  yield takeLatest(INCREASE_COUNT, workerSaga);
  yield takeLeading(INCREASE_COUNT, workerSaga);
}

export default function* rootSaga() {
  yield watchClickSaga();
}

// export function* watchClickSaga() {
//   yield take(INCREASE_COUNT);
//   console.log('watchClickSaga increase');
//   yield take(DECREASE_COUNT);
//   console.log('watchClickSaga decrease');
//   yield
// }

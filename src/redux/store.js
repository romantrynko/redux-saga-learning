import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer =
  typeof window === 'object' && window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState) =>
  createStore(reducer, preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware)));

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;

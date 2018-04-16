import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import api from '../middleware/api'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'


const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware(/* { sagaMonitor } */);
  const store = createStore(
    rootReducer,
    preloadedState,
  //   applyMiddleware(thunk, api)
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga)

  return store;
} 


export default configureStore
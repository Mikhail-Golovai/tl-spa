import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import feedbacks from './modules/feedbacks'
import {initSagas} from './initSagas'

const sagaMiddleware = createSagaMiddleware()
const middleWares = [sagaMiddleware]
const enhancer = composeWithDevTools(applyMiddleware(...middleWares))

export default function configureStore() {
  const rootReducer = combineReducers({
    feedbacks
  });
  const store = compose(
    enhancer
  )(createStore)(rootReducer);
  initSagas(sagaMiddleware)

  return store;
}
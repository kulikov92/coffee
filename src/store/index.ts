import {
  Store,
  createStore,
  applyMiddleware
} from 'redux'

import { default as thunk } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

import { IRootState } from './types'
import rootReducer from './reducers'

const logger = createLogger()
let middleware = applyMiddleware(logger, thunk)

if (process.env.NODE_ENV !== 'production') {
  middleware = composeWithDevTools(middleware);
}

export const store = createStore(rootReducer as any, middleware) as Store<IRootState>
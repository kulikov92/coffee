import { combineReducers } from 'redux'

import { coffeeReducer } from './coffeeReducer'
import { orderReducer } from './orderReducer'

export default combineReducers({
  coffeeReducer: coffeeReducer,
  orderReducer: orderReducer
})
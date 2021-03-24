import { ICoffeeState } from '../types'
import { GetCoffeeAction } from '../actions/type'
import { ActionTypes } from '../actionTypes'

const initialState: ICoffeeState = {
  coffeeList: []
}

export function coffeeReducer(state = initialState, action: GetCoffeeAction): ICoffeeState {
  switch (action.type) {
    case ActionTypes.GET_COFFEE_TYPES_SUCCESS:
      return {
        ...state,
        coffeeList: action.payload
      }
    default:
      return state
  }
}
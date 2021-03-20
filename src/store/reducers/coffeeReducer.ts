import { ICoffeeState } from '../types'
import { ActionTypes } from '../actionTypes'

const initialState: ICoffeeState = {
  coffeeList: [],
  coffeeOptions: [],
  coffeeAdditionals: []
}

export function coffeeReducer(state = initialState, action: any): ICoffeeState {
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
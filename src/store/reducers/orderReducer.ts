import { IOrderState } from '../types'
import { ActionTypes } from '../actionTypes'

const initialState: IOrderState = {
  id: null,
  title: null,
  orderOptions: [],
  orderAdditionals: [],
  orderServing: 'takeaway',
  basePrice: 0,
  totalPrice: 0
}

export function orderReducer(state = initialState, action: any): IOrderState {
  switch (action.type) {
    case ActionTypes.CANCEL_ORDER:
      return {
        id: null,
        title: null,
        orderOptions: [],
        orderAdditionals: [],
        orderServing: 'takeaway',
        basePrice: 0,
        totalPrice: 0
      }
    case ActionTypes.SET_NEW_ORDER:
      return action.payload
    case ActionTypes.SET_ORDER_SERVING:
      return {
        ...state,
        orderServing: action.payload
      }
    case ActionTypes.SET_ORDER_OPTIONS:
      if (action.payload.option) {
        if (state.orderOptions.find(option => option.catId === action.payload.option.catId)) {
          return {
            ...state,
            orderOptions: [...state.orderOptions.filter(option => option.catId !== action.payload.option.catId), action.payload.option]
          }
        } else {
          return {
            ...state,
            orderOptions: [...state.orderOptions, action.payload.option]
          }
        }
      } else {
        return {
          ...state,
          orderOptions: state.orderOptions.filter(option => option.catId !== action.payload.catId)
        }
      }
    case ActionTypes.SET_ORDER_ADDITIONALS:
      if (action.payload.additional.length) {
        return {
          ...state,
          orderAdditionals: [...state.orderAdditionals.filter((additional: any) => additional.catId !== action.payload.catId), ...action.payload.additional]
        }
      } else {
        return {
          ...state,
          orderAdditionals: [...state.orderAdditionals.filter((additional: any) => additional.catId !== action.payload.catId)]
        }
      }
    case ActionTypes.SET_ORDER_TOTAL_PRICE:
      let totalPrice = state.basePrice
  
      state.orderAdditionals.map((additional: any) => totalPrice += additional.price)
      state.orderOptions.map((option: any) => totalPrice += option.price)
      return {
        ...state,
        totalPrice: totalPrice
      }
    default:
      return state
  }
}
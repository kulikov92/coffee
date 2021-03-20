import {
  Dispatch
} from 'redux'

import {
  SetNewOrder,
  CancelOrder,
  SetOrderServing,
  SetOrderOption,
  SetOrderAdditional,
  SetOrderTotalPrice
} from './type'

import {
  IOrderState,
  ICoffeOption,
  ICoffeeAdditional
} from '../types'

import { ActionTypes } from '../actionTypes'

export const setNewOrder = (order: IOrderState) => {
  return (dispatch: Dispatch<SetNewOrder>) => {
    dispatch({
      type: ActionTypes.SET_NEW_ORDER,
      payload: order
    })
  }
}

export const setCancelOrder = () => {
  return (dispatch: Dispatch<CancelOrder>) => {
    dispatch({
      type: ActionTypes.CANCEL_ORDER
    })
  }
}

export const setOrderServing = (serving: string) => {
  return (dispatch: Dispatch<SetOrderServing>) => {
    dispatch({
      type: ActionTypes.SET_ORDER_SERVING,
      payload: serving
    })
  }
}

export const setOrderOptions = (option: ICoffeOption | null, catId: number) => {
  return (dispatch: Dispatch<SetOrderOption>) => {
    dispatch({
      type: ActionTypes.SET_ORDER_OPTIONS,
      payload: {
        option,
        catId
      }
    })
  }
}

export const setOrderAdditional = (additional: ICoffeeAdditional[], catId: number) => {
  return (dispatch: Dispatch<SetOrderAdditional>) => {
    dispatch({
      type: ActionTypes.SET_ORDER_ADDITIONALS,
      payload: {
        additional,
        catId
      }
    })
  }
}

export const setOrderTotalPrice = () => {
  return (dispatch: Dispatch<SetOrderTotalPrice>) => {
    dispatch({
      type: ActionTypes.SET_ORDER_TOTAL_PRICE
    })
  }
}
import { ActionTypes } from '../actionTypes'
import {
  ICoffee,
  IOrderState,
  ICoffeOption,
  ICoffeeAdditional
} from '../types'

interface IGetCoffeeListRequest {
  type: ActionTypes.GET_COFFEE_TYPES_REQUEST
}

interface IGetCoffeeListSuccess {
  type: ActionTypes.GET_COFFEE_TYPES_SUCCESS,
  payload: ICoffee[]
}

interface IGetCoffeeListFailure {
  type: ActionTypes.GET_COFFEE_TYPES_FAILURE
}

interface ISetNewOrder {
  type: ActionTypes.SET_NEW_ORDER,
  payload: IOrderState
}

interface ISetOrderServing {
  type: ActionTypes.SET_ORDER_SERVING,
  payload: string
}

interface ISetOrderOption {
  type: ActionTypes.SET_ORDER_OPTIONS,
  payload: {
    option: ICoffeOption | null,
    catId: number
  }
}

interface ISetOrderAdditional {
  type: ActionTypes.SET_ORDER_ADDITIONALS,
  payload: {
    additional: ICoffeeAdditional[],
    catId: number
  }
}

interface ISetOrderTotalPrice {
  type: ActionTypes.SET_ORDER_TOTAL_PRICE
}

interface ICancelOrder {
  type: ActionTypes.CANCEL_ORDER
}

export type GetCoffeeAction = IGetCoffeeListRequest | IGetCoffeeListSuccess | IGetCoffeeListFailure
export type SetNewOrder = ISetNewOrder
export type CancelOrder = ICancelOrder
export type SetOrderServing = ISetOrderServing
export type SetOrderOption = ISetOrderOption
export type SetOrderAdditional = ISetOrderAdditional
export type SetOrderTotalPrice = ISetOrderTotalPrice
export type OrderAction = SetNewOrder | CancelOrder | SetOrderServing | SetOrderOption | SetOrderAdditional | SetOrderTotalPrice
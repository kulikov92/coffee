import {
  Dispatch
} from 'redux'
import { GetCoffeeAction } from './type'
import { ActionTypes } from '../actionTypes'
import axios from 'axios'
import { PATHS } from '../../shared/constants/paths'

export const getCoffeList = () => {
  return async (dispatch: Dispatch<GetCoffeeAction>) => {
    try {
      const coffeList = await axios.get(PATHS.COFFE_TYPES)
      dispatch({
        type: ActionTypes.GET_COFFEE_TYPES_SUCCESS,
        payload: coffeList.data
      })
    } catch(err) {
      throw Error(err)
    }
  }
}
import { IOrderState } from '../store/types'

export function calculate(order: IOrderState): number {
  let totalPrice = order.basePrice
  
  order.orderAdditionals.map((additional: any) => totalPrice += additional.price)
  order.orderOptions.map((option: any) => totalPrice += option.price)
  
  return totalPrice
}
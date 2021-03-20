import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  IOrderState,
  IRootState,
  ICoffeOption,
  ICoffeeServing,
  ICoffeeAdditional
} from '../store/types'

import { Redirect } from 'react-router-dom'

import coffeeAdditionals from '../mock/additionals.json'
import coffeeOptions from '../mock/options.json'
import coffeeServing from '../mock/serving.json'

import {
  setCancelOrder,
  setOrderServing,
  setOrderOptions,
  setOrderAdditional,
  setOrderTotalPrice
} from '../store/actions/orderAction'

import Select from 'react-select'
import { Button } from '../components/Button'

export const CoffeeOrder: React.FC = () => {
  const dispatch = useDispatch()
  const order: IOrderState = useSelector((state: IRootState) => state.orderReducer)

  function handleCancelOrder() {
    dispatch(setCancelOrder())
  }

  function handleOptionsChange(option: ICoffeOption | null,  catId: number) {
    dispatch(setOrderOptions(option, catId))
    dispatch(setOrderTotalPrice())
  }

  function handleAdditionalChange(additional: ICoffeeAdditional[], catId: number) {
    dispatch(setOrderAdditional(additional, catId))
    dispatch(setOrderTotalPrice())
  }

  function handleServingChange(serving: ICoffeeServing) {
    dispatch(setOrderServing(serving.value))
  }

  if (!order.id) {
    return (
      <Redirect to='/'/>
    )
  }

  return (
    <div className="coffee-order">
      <div className="coffee-order__info">
        <div className="coffee-order__title">{order.title}</div>
        <Button onClick={handleCancelOrder}>Отменить</Button>
      </div>
      <div className="coffee-order__params">
        <div className="coffee-order__params-title">Зерна и обжарка</div>
        <div className="coffee-order__params-content">
          {coffeeOptions.map(optionGroup => (
            <Select
              key={optionGroup.id}
              options={optionGroup.variants}
              placeholder={optionGroup.title}
              isClearable
              onChange={(option) => handleOptionsChange(option, optionGroup.id)}/>
          ))}
        </div>
      </div>
      <div className="coffee-order__params">
        <div className="coffee-order__params-title">Топпинги</div>
        <div className="coffee-order__params-content">
          {coffeeAdditionals.map(additional => (
            <Select
              key={additional.id}
              options={additional.variants}
              placeholder={additional.title}
              isClearable
              isMulti
              onChange={(addOption) => handleAdditionalChange(addOption as ICoffeeAdditional[], additional.id)}/>
          ))}
        </div>
      </div>
      <div className="coffee-order__params">
        <div className="coffee-order__params-title">Сервировка</div>
        <div className="coffee-order__params-content">
          <Select
            options={coffeeServing}
            defaultValue={coffeeServing[0]}
            onChange={(serving) => handleServingChange(serving as ICoffeeServing)}/>
        </div>
      </div>
      <div className="coffee-order__info">
        <div className="coffee-order__title">Итого:</div>
        <div className="coffee-order__price">{order.totalPrice} ₸</div>
      </div>
    </div>
  )
}
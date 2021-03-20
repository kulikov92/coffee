import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { ICoffee, IRootState } from '../store/types'
import { getCoffeList } from '../store/actions/coffeAction'
import { setNewOrder } from '../store/actions/orderAction'
import { CoffeeCard } from '../components/CoffeeCard'

export const CoffeeList: React.FC = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const coffeeList: ICoffee[] = useSelector((state: IRootState) => state.coffeeReducer.coffeeList)

  useEffect(() => {
    dispatch(getCoffeList())
  }, [dispatch])

  function setCoffeeOrder(id: number) {
    const preOrder = coffeeList.filter(coffe => coffe.id === id)[0]

    dispatch(setNewOrder({
      id,
      title: preOrder.title,
      orderOptions: [],
      orderAdditionals: [],
      orderServing: 'takeaway',
      basePrice: preOrder.price,
      totalPrice: preOrder.price
    }))

    history.push('/order')
  }

  return (
    <div className="coffee-list">
      {coffeeList && coffeeList.map(coffee => (
        <CoffeeCard
          key={coffee.id}
          id={coffee.id}
          title={coffee.title}
          price={coffee.price}
          pic={coffee.pic}
          onChangeOrder={setCoffeeOrder}
        />
      ))}
    </div>
  )
}
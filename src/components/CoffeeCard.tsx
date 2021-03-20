import React from 'react'
import { Button } from './Button'

interface ICoffeeCardProps {
  id: number,
  title: string,
  pic: string,
  price: number,
  onChangeOrder: (id: number) => void
}

export const CoffeeCard: React.FC<ICoffeeCardProps> = ({
  id,
  title,
  pic,
  price,
  onChangeOrder
}) => {
  function handleSetOrder(e: React.MouseEvent<HTMLButtonElement>) {
    onChangeOrder(id)
  }

  return (
    <div className="coffee-card">
      <div className="coffee-card__img">
        <img src={`/${pic}`} alt={title}/>
      </div>
      <div className="coffee-card__info">
        <div className="coffee-card__title">{title}</div>
        <div className="coffee-card__price">{price}</div>
      </div>
      <div className="coffee-card__actions">
        <Button full onClick={handleSetOrder}>Заказать</Button>
      </div>
    </div>
  )
}
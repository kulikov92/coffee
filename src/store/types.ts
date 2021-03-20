export interface ICoffee {
  id: number,
  title: string,
  hasOptions: boolean,
  hasAdditional: boolean,
  hasServing: boolean,
  pic: string,
  price: number
}

export interface ICoffeOption {
  catId: number,
  value: number,
  label: string,
  price: number
}

export interface ICoffeeOptions {
  id: number,
  title: string,
  type: string,
  variants: ICoffeOption[]
}

export interface ICoffeeAdditional {
  catId: number,
  value: number,
  label: string,
  price: number
}

export interface ICoffeeAdditionals {
  id: number,
  title: string,
  variants: ICoffeeAdditional[]
}

export interface ICoffeeServing {
  value: string,
  label: string
}

export interface ICoffeeState {
  coffeeList: ICoffee[],
  coffeeOptions: ICoffeeOptions[],
  coffeeAdditionals: ICoffeeAdditionals[]
}

export interface IOrderState {
  id: number | null,
  title: string | null,
  orderOptions: ICoffeOption[],
  orderAdditionals: ICoffeeAdditionals[],
  orderServing: string,
  basePrice: number,
  totalPrice: number
}

export interface IRootState {
  coffeeReducer: {
    coffeeList: ICoffee[],
    coffeeOptions: ICoffeeOptions[],
    coffeeAdditionals: ICoffeeAdditionals[]
  },
  orderReducer: IOrderState
}
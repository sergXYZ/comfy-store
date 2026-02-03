import React from 'react'

import { SectionTitle, CartTotals, CartItemsList } from '../components'
import { useSelector } from 'react-redux'

const Cart = () => {
  const user = null
  const numberItemsInCart = useSelector(
    (store) => store.cartState.numItemsInCart,
  )
  if (numberItemsInCart === 0) {
    return <SectionTitle text={'your shopping cart is epmty'} />
  }

  return (
    <div>
      <SectionTitle text={'shoping cart'} />
      <div className="mt-8 grid gap-8 lg:grid-cols-12 ">
        <div className="lg:col-span-8">
          <CartItemsList className="lg:col-span-8" />
        </div>
        <div className="lg:col-span-4 pl-4">
          <CartTotals />
        </div>
      </div>
    </div>
  )
}

export default Cart

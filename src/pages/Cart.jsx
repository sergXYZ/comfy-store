import React from 'react'

import { SectionTitle, CartTotals, CartItemsList } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
          {user ? (
            <Link to="/checkout" className="btn btn-primary btn-block mt-8">
              Proceed to checkout
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary btn-block mt-8">
              please login
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart

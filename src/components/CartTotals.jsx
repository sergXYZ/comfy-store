import React from 'react'
import { useSelector } from 'react-redux'
import { formatPrice } from '../utils'

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState,
  )

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* {SUBTOTAL} */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
        {/* {SHIPPING} */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </p>
        {/* {TAX} */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </p>
        {/* {ORDER TOTAL} */}
        <p className="flex justify-between text-sm mt-4 pb-2">
          <span>Total Order</span>
          <span>{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals

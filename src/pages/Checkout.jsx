import React from 'react'
import { useSelector } from 'react-redux'
import { CartTotals, SectionTitle, CheckoutForm } from '../components'
import { toast } from 'react-toastify'
import { redirect } from 'react-router-dom'

export const loader = (store) => () => {
  const user = store.getState().userState.user

  if (!user) {
    toast.warn('You need login before checkout!')
    return redirect('/login')
  }
}

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartTotal)
  if (cartItems === 0) {
    return <SectionTitle text={'your cart is empty'} />
  }

  return (
    <>
      <SectionTitle text={'Place your order'} />
      <section className="grid sm:grid-cols-2 gap-4">
        <CheckoutForm />
        <CartTotals />
      </section>
    </>
  )
}

export default Checkout

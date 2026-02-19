import React from 'react'
import { Form, redirect } from 'react-router-dom'
import FormInput from './FormInput'
import SubmitBtn from './SubmitBtn'
import { customFetch, formatPrice } from '../utils'
import { clearCart } from '../features/cart/cartSlice'
import { toast } from 'react-toastify'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const { name, address } = Object.fromEntries(formData)
    const user = store.getState().userState.user
    const { cartItems, numItemsInCart, orderTotal } = store.getState().cartState
    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    }
    try {
      const postResponse = await customFetch.post(
        '/orders',
        { data: info },
        { headers: { Authorization: `Bearer ${user.tokens}` } },
      )
      store.dispatch(clearCart())
      toast.success('order placed successfully!')
      return redirect('/orders')
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'there was an error placing your order'
      toast.error(errorMessage)
      if (error.response.data.error.status === 401) {
        return redirect('/login')
      }
      return null
    }
  }

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col">
      <FormInput label={'full name'} name={'name'} type={'text'} />
      <FormInput label={'address'} name={'address'} type={'text'} />
      <SubmitBtn text={'place order'} />
    </Form>
  )
}

export default CheckoutForm

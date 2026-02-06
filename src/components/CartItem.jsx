import React from 'react'
import { formatPrice, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, editItem } from '../features/cart/cartSlice'

const CartItem = ({ item }) => {
  const {
    cartID,
    productID,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  } = item
  const [newAmount, setNewAmount] = useState(amount)
  const dispatch = useDispatch()
  const handleChangeAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }))
  }
  const handleRemove = () => {
    dispatch(removeItem({ cartID }))
  }
  return (
    <article key={cartID} className="flex flex-col sm:flex-row">
      <img src={image} className="w-24 h-24 rounded-lg object-cover" />
      <div className="sm:ml-16 sm:w-48">
        <h2>{title}</h2>
        <p>{company}</p>
        <p>
          Color:
          <span
            className="badge"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-16">
        <fieldset className="fieldset">
          <label htmlFor="amount" className="label">
            <h4>Amount</h4>
          </label>
          <select id="amount" onChange={handleChangeAmount}>
            {generateAmountOptions(amount + 5)}
          </select>
        </fieldset>
        <button className="btn" onClick={handleRemove}>
          remove
        </button>
      </div>
      <div className="sm:ml-auto">
        <h2>{formatPrice(price)}</h2>
      </div>
    </article>
  )
}

export default CartItem

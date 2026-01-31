import React, { useState } from 'react'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { Link, useLoaderData } from 'react-router-dom'
import { MdBorderColor } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`)

  return { product: response.data.data }
}

const SingleProduct = () => {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } =
    product.attributes

  const dollarsAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }

  const dispatch = useDispatch()
  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  }
  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="breadcrumbs text-md">
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/products'}>Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full "
        ></img>

        <div>
          <h1 className="text-3xl capitalize font-bold">{title}</h1>
          <h3 className="mt-2 text-xl text-neutral-content font-bold">
            {company}
          </h3>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          {/* COLORS */}
          <div className="mt-6">
            <h4>Colors</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge  w-6 h-6 mr-2 ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          {/* AMOUNT */}
          <div className="fieldset w-full max-w-xs">
            <label htmlFor="amount" className="label ">
              <h4 className="text-lg font-medium tracking-wider capitalize mt-2">
                amount
              </h4>
            </label>
            <select
              id="amount"
              value={amount}
              onChange={handleAmount}
              className="select select-secondary select-bordered select-md"
            >
              {generateAmountOptions(5)}
            </select>
          </div>
          {/* Card button */}
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct

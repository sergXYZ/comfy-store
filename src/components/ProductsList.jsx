import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsList = () => {
  const { products } = useLoaderData()
  return (
    <div className="mt-12 grid gap-y-8 ">
      {products.map((item) => {
        const { price, title, image, company } = item.attributes
        const dollarPrice = formatPrice(price)

        return (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="flex flex-col sm:flex-row flex-wrap gap-y-4 p-8 rounded-lg bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="rounded-xl h-24 w-24 sm:h-32 sm:w-32 group-hover:scale-105 transition duration-300 object-cover"
            ></img>

            <div className="ml-0  sm:ml-16">
              <h2 className=" capitalize font-medium text-lg ">{title}</h2>
              <h4 className="capitalize text-md text-neutral-content ">
                {company}
              </h4>
            </div>

            <p className="text-xl font-medium ml-0 sm:ml-auto ">
              {dollarPrice}
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductsList

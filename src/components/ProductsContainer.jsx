import ProductsList from './ProductsList'
import { useLoaderData } from 'react-router-dom'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import ProductsGrid from './ProductsGrid'
import { useState } from 'react'

const ProductsContainer = () => {
  const [layout, setLayout] = useState('grid')

  const { meta } = useLoaderData()

  const totalItems = meta.pagination.total

  const setBtnStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`
  }
  return (
    <>
      {/* HEADER */}
      <div className="justify-between items-center flex border-b border-neutral-content font-medium mt-8 pb-5">
        <p>
          {totalItems} product{totalItems > 1 && 's'}
        </p>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout('grid')}
            className={setBtnStyles('grid')}
          >
            <BsFillGridFill className=" " />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={setBtnStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      {totalItems === 0 ? (
        <h5 className="text-2xl mt-16">
          Sorry, there are no matching results...{' '}
        </h5>
      ) : layout === 'grid' ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  )
}

export default ProductsContainer

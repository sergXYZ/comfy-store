import React, { useState } from 'react'
import { formatPrice } from '../utils'

const FormPrice = ({ name, label, size }) => {
  const step = 1000
  const maxPrice = 100000
  const [currentPrice, setCurrentPrice] = useState(1000)

  return (
    <fieldset className="fieldset">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
        <span className="ml-auto">{formatPrice(currentPrice)}</span>
      </label>

      <input
        type="range"
        step={step}
        min="0"
        max={maxPrice}
        value={currentPrice}
        onChange={(e) => setCurrentPrice(e.target.value)}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max : {formatPrice(maxPrice)}</span>
      </div>
    </fieldset>
  )
}

export default FormPrice

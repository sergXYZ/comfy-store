import React from 'react'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeatureProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle text={'Featured Products'} />
      <ProductsGrid />
    </div>
  )
}

export default FeatureProducts

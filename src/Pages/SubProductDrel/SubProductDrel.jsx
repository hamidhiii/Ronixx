import React from 'react'
import ProductDrel from '../../components/ProductDrel/ProductDrel'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'

import ProductList from '../../components/ProductList/ProductList'
import { productDataCard } from '../../Constants/Index'




export default function SubProductDrel() {
  return (
    <div>
        <DrilsHeader/>
        <ProductDrel/>
        <ProductList productDataCard={productDataCard} /> {/* Передаем данные */}
    </div>
  )
}



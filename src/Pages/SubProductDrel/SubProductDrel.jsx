import React from 'react'
import ProductDrel from '../../components/ProductDrel/ProductDrel'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import { ProductDataCard } from '../../components/ProductDataCard/ProductDataCard'



export default function SubProductDrel() {
  return (
    <div>
        <DrilsHeader/>
        <ProductDrel/>
        <ProductDataCard/>
    </div>
  )
}

import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { SubCategorySupplier } from '../../Constants/Index'

export default function SubCategorySuplierr() {
  return (
    <div>
        <DrilsHeader/>
        <SubCategory data={SubCategorySupplier}/>
    </div>
  )
}

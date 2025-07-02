import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, SubCategorySupplier } from '../../Constants/Index'

export default function SubCategorySuplierr() {
  return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={SubCategorySupplier}/>
    </div>
  )
}

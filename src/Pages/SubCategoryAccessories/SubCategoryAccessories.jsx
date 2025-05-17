import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryAccessories } from '../../Constants/Index'

export default function SubCategoryAccessories() {
  return (
    <div>
    <DrilsHeader data={HeaderElectro}/>
    <SubCategory data={subCategoryAccessories} />
  </div>
  )
}

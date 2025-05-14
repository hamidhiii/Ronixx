import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryAccessories } from '../../Constants/Index'

export default function SubCategoryAccessories() {
  return (
    <div>
    <DrilsHeader />
    <SubCategory data={subCategoryAccessories} />
  </div>
  )
}

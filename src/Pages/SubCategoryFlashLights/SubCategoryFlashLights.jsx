import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryLights } from '../../Constants/Index'

export default function SubCategoryFlashLights() {
  return (
    <div>
        <DrilsHeader/>
        <SubCategory data={subCategoryLights}/>
    </div>
  )
}

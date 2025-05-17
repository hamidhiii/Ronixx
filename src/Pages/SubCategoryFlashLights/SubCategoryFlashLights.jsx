import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryLights } from '../../Constants/Index'

export default function SubCategoryFlashLights() {
  return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryLights}/>
    </div>
  )
}

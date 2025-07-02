import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryToolBoxes } from '../../Constants/Index'

export default function SubCAtegoryStorage() {
  return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryToolBoxes}/>
    </div>
  )
}

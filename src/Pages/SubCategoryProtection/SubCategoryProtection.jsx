import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryProtection } from '../../Constants/Index'

export default function SubCategoryProtection() {
  return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryProtection}/>
    </div>
  )
}

import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryProtection } from '../../Constants/Index'

export default function SubCategoryProtection() {
  return (
    <div>
        <DrilsHeader/>
        <SubCategory data={subCategoryProtection}/>
    </div>
  )
}

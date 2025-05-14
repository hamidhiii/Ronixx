import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryToolBoxes } from '../../Constants/Index'

export default function SubCAtegoryStorage() {
  return (
    <div>
        <DrilsHeader/>
        <SubCategory data={subCategoryToolBoxes}/>
    </div>
  )
}

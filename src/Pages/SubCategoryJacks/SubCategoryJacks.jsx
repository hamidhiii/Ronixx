import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryJacks } from '../../Constants/Index'

export default function SubCategoryJacks() {
  return (
    <div>
        <DrilsHeader/>
        <SubCategory data={subCategoryJacks}/>
    </div>
  )
}

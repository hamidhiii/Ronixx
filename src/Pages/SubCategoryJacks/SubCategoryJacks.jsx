import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryJacks } from '../../Constants/Index'

export default function SubCategoryJacks() {
  return (
    <div>
       <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryJacks}/>
    </div>
  )
}

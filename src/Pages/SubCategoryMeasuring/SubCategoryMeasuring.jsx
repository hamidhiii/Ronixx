import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryMeansuring } from '../../Constants/Index'

export default function SubCategoryMeasuring() {
  return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryMeansuring}/>
    </div>
  )
}

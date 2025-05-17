import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategory } from '../../Constants/Index'


export default function SubCategoryElectro() {
  return (
   <div>
    <DrilsHeader data={HeaderElectro}/>
    <SubCategory data={subCategory}/>
   </div>


  )
}

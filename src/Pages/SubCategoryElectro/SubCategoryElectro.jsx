import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategory } from '../../Constants/Index'


export default function SubCategoryElectro() {
  return (
   <div>
    <DrilsHeader/>
    <SubCategory data={subCategory}/>
   </div>


  )
}

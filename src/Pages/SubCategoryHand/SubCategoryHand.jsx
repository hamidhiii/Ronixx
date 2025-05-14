import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { subCategoryHandTools } from '../../Constants/Index'

function SubCategoryHand() {
    return (
    <div>
        <DrilsHeader/>
        <SubCategory data={subCategoryHandTools}/>
    </div>    
    )

}

export default SubCategoryHand

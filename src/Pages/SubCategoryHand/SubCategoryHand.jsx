import React from 'react'
import DrilsHeader from '../../components/DrilsHeader/DrilsHeader'
import SubCategory from '../../components/SubCategory/SubCategory'
import { HeaderElectro, subCategoryHandTools } from '../../Constants/Index'

function SubCategoryHand() {
    return (
    <div>
        <DrilsHeader data={HeaderElectro}/>
        <SubCategory data={subCategoryHandTools}/>
    </div>    
    )

}

export default SubCategoryHand

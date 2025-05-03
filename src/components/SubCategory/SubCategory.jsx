import React from 'react'
import './SubCategory.scss'
import { Col, Container, Row } from 'react-bootstrap'
import { subCategory } from '../../Constants/Index'
<<<<<<< HEAD
=======
// import ProductDril from '../ProductDril/ProductDril'
>>>>>>> 21f9046 (farruxs codes)

export default function SubCategory() {
  return (
    <section className="sub-category">
        <Container>
            <Row className="justify-content-center">
                {subCategory.map(({id, title, img}) => (
                    <Col className='cards' key={id}>
                        <img src={img} alt={title}/>
                        <p>{title}</p>
                    </Col>
                ))}
            </Row>
        </Container>
<<<<<<< HEAD
=======

       
        {/* <Route path='/Drils' element={<ProductDril/>}/> */}
        {/* <Route path='/hand-tools' element={<SubCategoryHand/>}/>
        <Route path='/flashlights' element={<SubCategoryFlashLights/>}/>
        <Route path='/measuring-devices' element={<SubCategoryMeasuring/>}/> */}
    
>>>>>>> 21f9046 (farruxs codes)
    </section>
  )
}

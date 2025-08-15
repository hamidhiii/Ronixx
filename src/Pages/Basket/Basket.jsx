import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Checkout from '../../components/Checkout/Checkout/Checkout'

export default function Basket() {
  return (
    <section>
        <Container>
            <Row>
                <Checkout/>
            </Row>
        </Container>
    </section>
  )
}

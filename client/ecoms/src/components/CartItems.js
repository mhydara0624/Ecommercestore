import React from 'react'
import { Card, Button } from 'react-bootstrap'

function CartItemCard(props) {
  const { product } = props
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button variant="primary">Remove Listing</Button>
      </Card.Body>
    </Card>
  )
}

export default CartItemCard

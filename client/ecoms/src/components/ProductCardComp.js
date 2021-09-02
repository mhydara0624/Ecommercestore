import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ProductCard(props) {
  const { product } = props

  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text> ${product.price} </Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

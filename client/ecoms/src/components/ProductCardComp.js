import axios from 'axios'
import React from 'react'
import { Card, Button } from 'react-bootstrap'

function ProductCard(props) {
  const { product } = props

  const deleteListing = () => {
    axios.delete(`http://localhost:3001/api/products/${props._id}`)
  }
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text> ${product.price} </Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Button onClick={deleteListing} variant="primary">
          Delete Listing
        </Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

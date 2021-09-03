import axios from 'axios'
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { BASE_URL } from '../globals'

function ProductCard(props) {
  const { product } = props

  // const deleteListing = (props) => {
  //   axios.delete(`${BASE_URL}` / { props })
  // }
  return (
    <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text> ${product.price} </Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary">Delete Listing</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard

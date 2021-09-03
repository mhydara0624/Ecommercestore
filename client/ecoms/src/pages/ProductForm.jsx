import React from 'react'
import TextInput from '../components/TextInput'
import { ListGroup } from 'react-bootstrap'


function ProductForm(props) {
  
  const handleSubmit = (e) => {
  e.preventDefault(e)
    props.addProduct()
  }
  
  
  return (
    <div className='form'>
      <h1>Add A New Product Listing</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextInput
          type="text"
          value={props.newProduct.title}
          onChange={props.handleChange}
          name={'title'}
          placeholder={'title'}
        />
        <TextInput
          type="text"
          value={props.newProduct.image}
          onChange={props.handleChange}
          name={'image'}
          placeholder={'image'}
        />
        <TextInput
          type="text-area"
          value={props.newProduct.description}
          onChange={props.handleChange}
          name={'description'}
          placeholder={'description'}
        />
        <TextInput
          type="text"
          value={props.newProduct.price}
          onChange={props.handleChange}
          name={'price'}
          placeholder={'price'}
        />
         <TextInput
          type="text"
          value={props.newProduct.brand}
          onChange={props.handleChange}
          name={'brand'}
          placeholder={'brand'}
        />
        <button>Submit</button>
      </form>
   <div className='brand'>
   <h1>Accepted Brand Codes</h1>
   <ListGroup>
  <ListGroup.Item>612d4cf6feae565212f17b6b</ListGroup.Item>
  <ListGroup.Item>612d4cf6feae565212f17b67</ListGroup.Item>
  <ListGroup.Item>612d4cf6feae565212f17b68</ListGroup.Item>
  <ListGroup.Item>612d4cf6feae565212f17b69</ListGroup.Item>
  
</ListGroup>
   </div>
    </div>
  
  )
}

export default ProductForm
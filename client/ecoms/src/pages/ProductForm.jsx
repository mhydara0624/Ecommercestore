import React from 'react'
import TextInput from '../components/TextInput'
// import { Button } from 'react-bootstrap'


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
    </div>
  )
}

export default ProductForm
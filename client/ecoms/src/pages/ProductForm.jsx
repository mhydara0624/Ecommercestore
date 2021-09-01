import React, { useEffect } from 'react'
import TextInput from '../components/TextInput'

function ProductForm(props) {
  const handleSubmit = (e) => {
    props.addProduct(e)
  }
 useEffect(() => {
   let selectedProduct = props.productss.find((product)=>product._id)
 },[])
  
  
  return (
    <div>
      <h1>Add A New Product Listing</h1>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          value={props.newProduct.title}
          onChange={props.handleChange}
          name={'name'}
          placeholder={'name'}
        />
        <TextInput
          type="text"
          value={props.newProduct.image}
          onChange={props.handleChange}
          name={'img'}
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ProductForm
import React from 'react'
import ProductCard from '../components/ProductCardComp'

function Store(props){
  const productse = props.products.products
  console.log(props)
  console.log(productse)
  const storeListings = productse.map((product) => {
    return (
      < ProductCard
      key={`${product._id}`} 
      product = {product}/>
    )
  })
return<div className="listings"> {storeListings} </div>
}


export default Store


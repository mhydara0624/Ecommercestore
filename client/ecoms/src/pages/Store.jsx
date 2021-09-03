import React from 'react'
import ProductCard from '../components/ProductCardComp'

function Store(props){
  const productse = props.products.products
  let storeListings; 
  if(productse) { 
    storeListings= productse.map((product) => {
    return (
      < ProductCard
      key={`${product.id}`} 
      product = {product}
      />
    )
  })
}
return<div className="listings"> {storeListings} </div>
}


export default Store


import React from 'react'
import ProductCard from '../components/ProductCardComp'

function Store(props){
  const storeListings = props.products.map((product) => {
    return (
      < ProductCard
      key={`${product._id}`} 
      product = {product}/>
    )
  })
return<div className="listings"> {storeListings} </div>
}

export default Store


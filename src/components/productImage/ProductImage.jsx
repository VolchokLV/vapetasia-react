import React from 'react'
import './productImage.css'

const ProductImage = (props) => {
  return (
    <img className="vapetasia-image-object" src={'https://cdn2.vapetasia.com' + props.src} alt="Product Image" />
  )
}

export default ProductImage
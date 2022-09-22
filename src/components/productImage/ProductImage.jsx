import React from 'react'
import './productImage.css'

const ProductImage = (props) => {

  return (
    <object data={'https://cdn2.vapetasia.com' + props.src} />
  )
}

export default ProductImage
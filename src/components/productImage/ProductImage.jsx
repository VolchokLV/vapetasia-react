import React from 'react'
import './productImage.css'

const ProductImage = (props) => {

  return (
    <object data={'https://cdn.mojoverse.io/asdfasdfdf334343sdfadsf' + props.src} />
  )
}

export default ProductImage
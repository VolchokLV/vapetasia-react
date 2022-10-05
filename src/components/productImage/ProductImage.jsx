import React from 'react'
import './productImage.css'

const ProductImage = (props) => {

  const typeFromSrc = (src) => {
    if (src.indexOf('.jpg') > -1 || src.indexOf('.jpeg') > -1) {
      return 'image/jpeg';
    } else if (src.indexOf('.png') > -1) {
      return 'image/png';
    } else if (src.indexOf('.svg') > -1) {
      return 'image/svg+xml';
    }
  }

  return (
    <object class="vapetasia-image-object" type={typeFromSrc(props.src)} data={'https://cdn2.vapetasia.com' + props.src} alt="Product Image" onClick={() => {console.log('clicked')}}/>
  )
}

export default ProductImage
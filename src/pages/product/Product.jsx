import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

import {ProductShowcase, PopularFlavors} from '../../components';

const Product = (props) => {

  const { slug, size } = useParams()

  return (
    <>
      <ProductShowcase product={props.products.find(p => p.product_slug == slug)} size={size} />
      <PopularFlavors featured={props.featured}></PopularFlavors>
    </>
  )
}

export default Product
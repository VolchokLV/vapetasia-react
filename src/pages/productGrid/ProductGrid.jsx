import React from 'react'
import './productGrid.css'
import { useHistory, useParams } from 'react-router-dom'

import {Hero, ProductGridItem} from '../../components'

const text = {
  'e-liquid': 'Enjoy our great Vapetasia flavors in your favorite vaporizers. Vapetasia offers its flavors in 0mg, 3mg, 6mg, and 12mg options in 100ml bottles.'
}

const ProductGrid = (props) => {

  const { type, topic, value } = useParams()

  let matches = 0

  return (
    <>
      <Hero 
        top={'Vapetasia'} 
        bottom={type} 
        paragraph={text[type]} />

        <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-d4932c3 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="d4932c3" data-element_type="section">
          
            <div className="vapetasia-custom-grid">

              {props.products.map(p => {
                if (p.product_types.includes(type) && 
                  (
                    topic == '_' ||
                    (topic == 'size' && p.sizes[type].includes(value)) ||
                    (topic == 'brand' && p.product_slug.includes(value))
                  ) 
                ) {
                  return (<ProductGridItem product={p} />)
                }
              })}

          </div>
      </section>

    </>
  )
}

export default ProductGrid
import React from 'react'
import './productGrid.css'
import { useHistory, useParams } from 'react-router-dom'

import {Hero, ProductGridItem} from '../../components'
import * as heroes from '../../data/heroes.json'

const ProductGrid = (props) => {

  const { type, topic, value } = useParams()

  let matches = 0
  let textKey = '';
  let bottomText = '';
  let heroKey = '';
  if (topic == '_') {
    bottomText = 'Disposable';
    textKey = type;
    heroKey = 'Disposable';
  } else if (topic == 'brand') {
    bottomText = value.replace('-', ' ').replace('-', ' ') + ' disposables';
    textKey = type + '-' + value;
    heroKey = value === 'killer' ? 'KillerDisposables' : 'HyveDisposables'
  } else if (topic == 'size') {
    if (type == 'eliquid') {
      bottomText = 'E-Liquid ' + value;
      textKey = type + '-' + value;
    } else {
      bottomText = 'Salt ' + value;
      textKey = type;
    }
    heroKey = value;
  }

  return (
    <>
      <Hero 
        heroClass={heroKey}
        top={'Vapetasia'} 
        bottom={bottomText} 
        paragraph={heroes.default[0]['paragraphs'][textKey]} />

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
                  return (<ProductGridItem key={p.product_slug} product={p} />)
                }
              })}

          </div>
      </section>

    </>
  )
}

export default ProductGrid
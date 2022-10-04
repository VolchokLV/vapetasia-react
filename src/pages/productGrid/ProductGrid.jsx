import React from 'react'
import './productGrid.css'
import { useHistory, useParams } from 'react-router-dom'

import {Hero, ProductGridItem} from '../../components'

const text = {
  'eliquid': 'Enjoy our great Vapetasia flavors in your favorite vaporizers. Vapetasia offers its flavors in 0mg, 3mg, 6mg, and 12mg options in 100ml bottles.',
  'salt': 'Experience the same great Vapetasia flavors in your favorite salt nicotine device. Vapetasia offers salt options in nicotine strengths of 12mg, 24mg and 48mg in 30ml bottles.',
  'eliquid-60ml': 'Enjoy our great Vapetasia flavors in your favorite vaporizers. Vapetasia offers its flavors in 0mg, 3mg, 6mg, and 12mg options in 60ml bottles.',
  'eliquid-100ml': 'Enjoy our great Vapetasia flavors in your favorite vaporizers. Vapetasia offers its flavors in 0mg, 3mg, 6mg, and 12mg options in 100ml bottles.',
  'disposable-killer': 'Enjoy Vapetasia flavors in convenient disposables. Vapetasia offers unique flavors in 10ml 3500 puff, 5% Nicotine, 1.5 Ohm rechargeable disposables.',
  'disposable-vapetasia-x-hyve': 'Vapetaisa and Hyve collaborated to bring the best of our flavors together with one of the most popular devices in 2500 and 4000 puff counts.',
  'disposable': 'Vapetasia has many disposable choices - Need to update the text here'  
}

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
        paragraph={text[textKey]} />

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
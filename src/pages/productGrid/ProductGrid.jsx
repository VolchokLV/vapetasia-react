import React from 'react'
import './productGrid.css'
import { useHistory, useParams } from 'react-router-dom'

import {Hero, ProductGridItem} from '../../components'
import * as heroes from '../../data/heroes.json'

const ProductGrid = (props) => {

  const { type, topic, value } = useParams() //url params

  /**
   * SORT OUT THE HERO CONTENT BASED ON PAGE ROUTE
   */
  let heroKey = 'Fallback'; // defines which hero image and settings to apply to the hero
  let bottomText = '...'; // defines what comes below "vapetasia" in the hero
  let paragraphKey = '...'; // defines which paragraph should be displayed in the hero
  if (topic == 'brand') {
    //looking for a brand of disposables
    if (value === 'killer-disposables') {
      heroKey = 'KillerDisposables'
    } else if (value === 'hyve-disposables') {
      heroKey = 'HyveDisposables';
    } else if (value === 'air-disposables') {
      heroKey = 'AirDisposables';
    }
    bottomText = value.replace('-', ' ').replace('-', ' ');
    paragraphKey = value;
  } else if (topic == 'size') {
    if (type == 'eliquid') {
      //looking for a size of eliquid
      bottomText = 'E-Liquid ' + value;
      paragraphKey = type + '-' + value;
    } else {
      //looking for a size of salt
      bottomText = 'Salt ' + value;
      paragraphKey = type;
    }
    heroKey = value;
  }

  return (
    <>
      <Hero 
        heroClass={heroKey}
        top={'Vapetasia'} 
        bottom={bottomText} 
        paragraph={heroes.default[0]['paragraphs'][paragraphKey]} />

        <section className="vapetasia-section vapetasia-top-section vapetasia-element vapetasia-element-d4932c3 vapetasia-section-boxed vapetasia-section-height-default vapetasia-section-height-default" data-id="d4932c3" data-element_type="section">
          
            <div className="vapetasia-custom-grid">

              {props.products.map(p => {
                if (p.product_types.includes(type) && 
                  (
                    (topic === 'size' && p.sizes[type].includes(value)) || // display only products with specified size
                    (topic === 'brand' && p.product_slug.includes(value)) // display only products with specified brand
                  ) 
                ) {
                  return (<ProductGridItem 
                    key={p.product_slug} 
                    product={p} 
                    type={type} 
                    topic={topic} 
                    topicValue={value} />)
                }
              })}

          </div>
      </section>

    </>
  )
}

export default ProductGrid
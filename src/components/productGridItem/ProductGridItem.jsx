import React from 'react'
import './productGridItem.css'
import {Hero} from '../../components'

const ProductGridItem = (props) => {

  return (
    <div className="vapetasia-custom-grid-item">
      <div className="vapetasia-element vapetasia-element-f80e103 vapetasia-widget vapetasia-widget-image" data-id="f80e103" data-element_type="widget" data-widget_type="image.default">
        <div className="vapetasia-widget-container">
          <div className="vapetasia-image">
            <a href={ '/product/' + props.product.product_slug + '/_' }>
              <img width="300" height="300" src="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png" data-src="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png" className="attachment-medium size-medium ls-is-cached lazyloaded" alt="" data-srcset="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png 300w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-150x150.png 150w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-768x768.png 768w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-600x600.png 600w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up.png 1000w" sizes="(max-width: 300px) 100vw, 300px" srcset="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png 300w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-150x150.png 150w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-768x768.png 768w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-600x600.png 600w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up.png 1000w" />
              <noscript>
                <img width="300" height="300" src="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png" className="attachment-medium size-medium lazyload" alt="" srcset="https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-300x300.png 300w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-150x150.png 150w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-768x768.png 768w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up-600x600.png 600w, https://cdn.vapetasia.com/wp-content/uploads/2022/06/30185257/White-Gummy-3mg-Mock-Up.png 1000w" sizes="(max-width: 300px) 100vw, 300px" />
              </noscript>
            </a>
          </div>
        </div>
      </div>
      <div className="vapetasia-element vapetasia-element-f371ea7 vapetasia-widget vapetasia-widget-heading" data-id="f371ea7" data-element_type="widget" data-widget_type="heading.default">
        <div className="vapetasia-widget-container">
          <h2 className="vapetasia-heading-title vapetasia-size-default">
            <a className="vape-font h-2" href={ '/product/' + props.product.product_slug + '/_' }>
              {props.product.product_name}
            </a>
          </h2>
        </div>
      </div>
      <div className="vapetasia-element vapetasia-element-ce2de18 vapetasia-widget vapetasia-widget-text-editor" data-id="ce2de18" data-element_type="widget" data-widget_type="text-editor.default">
        <div className="vapetasia-widget-container">
          <div className="vapetasia-text-editor vapetasia-clearfix">
            <p className="vape-font h-3">
              {props.product.main_text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGridItem
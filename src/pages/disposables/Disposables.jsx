import React from 'react'

const Disposables = (props) => {

  console.log('disposable prods:')
  console.log(props)

  return (
    <div>
      {props.products.map(p => (<div>{p.product_name}</div>))}
    </div>
  )
}

export default Disposables
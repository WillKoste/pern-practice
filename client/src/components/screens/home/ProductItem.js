import React from 'react'
import {Link} from 'react-router-dom'

const ProductItem = ({prod}) => {
  return (
    <div className="card bg-secondary">
      <img className="card-img-top p-3" src={prod.image} alt={prod.name} />
      <div className="card-body">
        <h5 className="card-title">{prod.name}</h5>
        <p className="card-text">{prod.description}</p>
        <Link className="btn btn-success" to={`/products/${prod.id}`}>View Product</Link>
      </div>
    </div>
  )
}

export default ProductItem

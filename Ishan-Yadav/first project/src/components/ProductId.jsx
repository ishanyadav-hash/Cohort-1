import React from 'react'
import { useParams } from 'react-router-dom'

const ProductId = () => {
    const {id} = useParams();
  return (
    <div>ProductId = {id}</div>
  )
}

export default ProductId
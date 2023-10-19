import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const {query} = useRouter();
  const [productDetail, setProductDetail] = useState<TProduct>({} as TProduct);
  useEffect(() => {
    window.fetch(`/api/avo/${query.id}`)
    .then(response => response.json())
    .then(json => setProductDetail(json));
  }, [query.id]);
  return (
    <div>
      <div>Platzi and Next.js!</div>
      <div>{productDetail.name}</div>
    </div>
  )
}

export default ProductPage;
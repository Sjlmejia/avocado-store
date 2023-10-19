import React, { useState, useEffect } from 'react'

const HomePage = () => {

  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
    .fetch('/api/avo')
    .then(response => response.json())
    .then(({data}) => {
      setProductList(data)
    });
  }, [])
  
  return (
    <div>
      <div>Platzi and Next.js!</div>
      {productList.map((product:TProduct) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
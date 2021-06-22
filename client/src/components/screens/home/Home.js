import React, {useEffect} from 'react'
import axios from 'axios'

const Home = () => {
  const getProducts = async () => {
    const res = await axios.get('/api/v1/products')

    console.log(res.data.products);
  }
  
  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <div>
      <h1>Home Component</h1>
    </div>
  )
}

export default Home

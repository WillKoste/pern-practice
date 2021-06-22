import React, {useEffect} from 'react'
import axios from 'axios'
import Products from './Products'

const Home = () => {
  return (
    <div>
      <h1>Home Component</h1>
      <Products />
    </div>
  )
}

export default Home

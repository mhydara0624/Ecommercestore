import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    async function getProducts() {
      let res = await axios.get(`${BASE_URL}`)
      console.log(res.data)
      setProducts(res.data)
    }
    getProducts()
    return <div></div>
  }, [])
  return (
    <div className="App">
      <NavbarComp />
    </div>
  )
}

export default App

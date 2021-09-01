import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Store from './pages/Store'

function App() {
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    img: '',
    description: '',
    price: ''
  })

  const addProduct = (e) => {
    e.preventDefault()
    const currentProduct = products
    const newProduct = {
      ...newProduct,
      id: parseInt(products.length + 1),
      price: parseInt(newProduct.price)
    }
    currentProduct.push(newProduct)
    setProducts(newProduct)
    setNewProduct({ id: '', name: '', img: '', description: '', price: '' })
  }

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    async function getProducts() {
      let res = await axios.get(`${BASE_URL}`)
      console.log(res.data)
      setProducts(res.data)
    }
    getProducts()
    return
  }, [])
  return (
    <div className="App">
      <header>
        <NavbarComp />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/store"
            component={(routerProps) => (
              <Store {...routerProps} products={products} />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/NavbarComp'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from './globals'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'
import ProductForm from './pages/ProductForm'

function App() {
  const [products, setProducts] = useState([])
  const [newProduct, setNewProduct] = useState({
    title: '',
    image: '',
    description: '',
    price: '',
    brand: ''
  })

  const addProduct = async (req, res) => {
    res = await axios.post(`${BASE_URL}`, newProduct)
  }

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    console.log(newProduct)
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
          <Route
            exact
            path="/admin"
            render={(props) => (
              <ProductForm
                // {...props}
                newProduct={newProduct}
                handleChange={handleChange}
                addProduct={addProduct}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App

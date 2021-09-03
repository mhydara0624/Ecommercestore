# My E-commerce Store
## By: Mustapfa Hydara
#
Ecommerce is the future of our economy. As an upcoming software engineer I want to show I can make a product for real world use.

# Technologies Used
<li>  <a href = "https://trello.com/b/BNq3IkjE/ecommerce-store">Trello </a>
<li>  <a href = "https://github.com/mhydara0624/Ecommercestore">GitHub </a>
<li> Lucid Chart
<li> Javascript
<li> CSS
<li> Bootstrap
<li> React
<li> MongoDB
<li> Mongoose
<li> Heroku

# Getting Started
This E-commerce store will be a full stack MERN application is depolyed on Heroku. This application will be a website with a store page displaying various electronics products along with their price and other information. The aim of this project was to be able to display 3 crud requests GET POST and DELETE. The GET is displayed This app is from an admin's view and they are able to import new products into the API and store page via the form. The GET request comes into play when displaying the store items in the database. The Delete function is with the delete list button.

# ERD
 <img src = 'mdpictures/EcommerceERD3.png'>

 # Component Diagram Tree
 <img src = 'mdpictures/componenttreecommerce21.png'>

# Coding Structure
<details>
<summary> Back-End</summary>
<li> The Back-End process started with using mongoose with mongodb and setting up boilerplate as well as the schemas for my data. I used two schema but used mongoose associations with my brand schema so I could use it without repeating it over multiple products. I made sure to export both. 
<img src='mdpictures/productschema.png'>
<li> After setting up my two schema I decided to set up a seed file to give my application data to begin with. After completing this and seeding the data into my database I was ready to move on to express.
<li> Before setting up my express routes I set up my controllers so that I would be able to manipulate the data as needed. Below I have provided an example of my controllers with my POST request controller.

```javascript
const createProducts = async (req, res) => {
  try {
    const product = await new Product(req.body)
    await product.save()
    return res.status(201).json({
      product
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
```
<li> The importance of controllers is dispalyed when you see how simple express routes become when you can just reference the controller function. After testing my routes on insomnia I was able to begin to move on to react. Below I have shown my express routes.

```javascript
const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/products', controllers.getAllProducts)

router.post('/products', controllers.createProducts)

router.delete('/products/:id', controllers.deleteProduct)

module.exports = router

```
</details>  

<details>
<summary> Front-End</summary>
</details>  

<details>
<summary> Styling</summary>
</details>  
 
 # Credits


 # Future Updates
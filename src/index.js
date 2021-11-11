const express = require('express')
const handlebars = require('express-handlebars');
const path = require('path')
const morgan = require('morgan')
const app = express()
const port = 3000

// Static file
app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Routing
app.get('/', (req, res) => {res.render('index')})
app.get('/products-list', (req, res) => {res.render('products-list')})
app.get('/product-detail', (req, res) => {res.render('product-detail')})
app.get('/add-product', (req, res) => {res.render('add-product')})
app.get('/orders-list', (req, res) => {res.render('orders-list')})
app.get('/customers-list', (req, res) => {res.render('customers-list')})

app.get('*', (req, res) => {res.render('404')})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
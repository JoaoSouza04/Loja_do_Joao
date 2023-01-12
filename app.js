const mongoose = require('mongoose')
const express = require('express')
const dotenv = require('dotenv')
const fs = require('fs')
const app = express()

app.use(express.json())

const controllers = require('./productController')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Database successfully connected!')
  })

app.post('/', controllers.createProduct)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log('Listening on port 3000!')
})

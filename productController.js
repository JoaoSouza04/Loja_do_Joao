const Product = require('./productModels')

exports.createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body)

    response.status(201).json({
      data: {
        product: newProduct
      }
    })
  } catch (err) {
    console.log(err)
    response.send('vai se ferrar')
  }
}

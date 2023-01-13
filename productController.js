const Product = require('./productModels')

exports.createProduct = async (request, response) => {
  try {
    const newProduct = await Product.create(request.body)

    response.status(201).json({
      data: {
        Product: newProduct
      }
    })
  } catch (err) {
    response.status(400).json({
      message: `The product wasn't created, please type the right parameters`
    })
  }
}

exports.getProduct = async (request, response) => {
  try {
    const id = request.params.id
    const product = await Product.findById(id)

    response.status(200).json({
      data: {
        Product: product
      }
    })
  } catch (err) {
    response.status(404).send('Product not Found!, please type the right id')
  }
}

exports.getAllProducts = async (request, response) => {
  try {
    const products = await Product.find()

    response.status(200).json({
      results: products.length,
      data: {
        products
      }
    })
  } catch (err) {
    response.status(404).json({
      message: err
    })
  }
}

exports.updateProduct = async (request, response) => {
  try {
    const newProduct = await Product.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
        runValidators: true
      }
    )
    response.status(200).json({
      message: 'Update completed!, this is the product now',
      data: {
        Product: newProduct
      }
    })
  } catch (err) {
    response.status(400).json({
      message: err
    })
  }
}

exports.deleteProduct = async (request, response) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(request.params.id)

    if (deletedProduct === null) {
      response.status(404).send('Id not found!')
    }
    response.status(202).json({
      message: "Successful Delete!, that's what has been deleted",
      data: {
        Product: deletedProduct
      }
    })
  } catch (err) {
    console.log(err)
  }
}

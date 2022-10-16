const uuid= require('uuid')

class Product {
    constructor(id, {name,description,price}){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
    }
}

const productsDB = {}

function getProducts({field, value}) {
    const products = Object.values(productsDB)

    if(field && value ) {
        return products.filter(s => s[field] == value)
    }

    return products
}

function getProduct({id}){

    if (!productsDB[id]){
        throw new Error ('Product not found')
    }
    return productsDB[id]
}

function createProduct({data}) {
    const id = uuid.v1()
    const newProduct = new Product(id, data)

    productsDB[id] = newProduct

    return newProduct
}

function  updateProduct(id, {data}){
    if(!productsDB[id]){
        throw new Error('Product not found')
    }
    const productUpdated = new Product(id, data)

    productsDB[id] = productUpdated

    return productUpdated
}

function deleteProduct(id){
    if(!productsDB[id]){
        throw new Error('product not found')
    }
    const productDelete = new Product(id, data)
    delete productsDB[id]

    return productDelete
}

module.exports= {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
}
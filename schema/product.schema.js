const graphql = require ('graphql')
const {buildSchema} = graphql

const schemaProduct = buildSchema(`
    type Product {
        id: ID!
        name:String,
        description:String,
        price:Int
    }

    input ProductInput {
        name: String,
        description: String,
        price: Int
    }

    type Query {
        getProduct(id: ID!): Product,
        getProducts(field: String, value: String): [Product],
    } 

    type Mutation {
        createProduct (data: ProductInput): Product,
        updateProduct (id: ID!, data: ProductInput): Product,
        deleteProduct (id: ID!): Product,
    }

`)

module.exports = schemaProduct
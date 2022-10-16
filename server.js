const express = require('express')
const { graphqlHTTP } = require ('express-graphql')
const schemaProduct = require ('./schema/product.schema')
const resolvers = require ('./resolvers/products.resolvers')

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schemaProduct,
    rootValue: resolvers,
    graphiql: true
}))

const PORT = process.env.PORT || 8080

app.listen(PORT, ()=>{
    console.log(`server running ${PORT}...`);
})
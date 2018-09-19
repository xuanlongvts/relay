const express = require('express');
const cors = require('cors');
const graphQLHTTP = require('express-graphql');
const { GraphQLSchema } = require('graphql');

const Query = require('./src/types/Query');
const Mutation = require('./src/types/Mutation');

const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

let app = express();
app.use(cors());

app.use(
    '/backend',
    graphQLHTTP({
        schema,
        graphiql: true
    })
);

app.listen(5000);
console.log('Server started on port 5000');

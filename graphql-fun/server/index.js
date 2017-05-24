const express = require('express');
const expressGraphQL = require('express-graphql');

const appSchema = require('./schema');

const app = express();

app.use('/api', expressGraphQL({
    schema: appSchema,
    pretty: true,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('GraphQL API started!');
});
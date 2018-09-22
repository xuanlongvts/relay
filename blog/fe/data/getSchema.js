var fetch = require('node-fetch');
var fs = require('fs');
var path = require('path');

const { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities');

console.log(introspectionQuery);

fetch('http://localhost:5000/backend', {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: introspectionQuery })
})
    .then(res => res.json())
    .then(res => {
        const schema = printSchema(buildClientSchema(res.data));
        console.log('schema', schema);
        fs.writeFileSync(path.join(__dirname, './schema.graphql'), schema);
    });

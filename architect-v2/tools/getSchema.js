var fs = require('fs');
var path = require('path');
var axios = require('axios');
var { buildClientSchema, introspectionQuery, printSchema } = require('graphql/utilities');

var getToken = require('./token');

axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    headers: {
        Authorization: `bearer ${getToken}`,
    },
    data: JSON.stringify({ query: introspectionQuery }),
}).then(result => {
    const schema = printSchema(buildClientSchema(result.data.data));
    fs.writeFileSync(path.join(__dirname, './schema.graphql'), schema);
});

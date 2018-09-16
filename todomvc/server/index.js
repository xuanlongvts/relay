import express from 'express';
import graphQLHTTP from 'express-graphql';
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import {schema} from './data/schema';

const APP_PORT = 3000;

const compiler = webpack({
    mode: 'development',
    entry: ['whatwg-fetch', path.resolve(__dirname, '../client/src', 'app.js')],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    output: {
        filename: 'app.js',
        path: '/',
    },
});
const app = new WebpackDevServer(compiler, {
    contentBase: '../client/public/',
    publicPath: '/js/',
    stats: {colors: true},
});

app.use('/', express.static(path.resolve(__dirname, '../client/public')));

// Setup GraphQL endpoint
app.use(
    '/graphql',
    graphQLHTTP({
        schema: schema,
        pretty: true,
        graphiql: true,
    }),
);

app.listen(APP_PORT, () => {
    console.log(`App is now running on http://localhost:${APP_PORT}`);
});

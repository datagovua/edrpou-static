import express from 'express';
import proxy from 'proxy-middleware';
import React from 'react';
import Helmet from "react-helmet";
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { getDataFromTree } from 'react-apollo/server';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { match, RouterContext } from 'react-router';
import ReactDOM from 'react-dom/server';

import htmlTemplate from 'indexHtml.js';
import routes from 'src/routes.js';


const GRAPHQL_URL = process.env.GRAPHQL_URL;

let app = express();

// TODO move to a dedicated 'static' folder
app.use('/jspm_packages/system.js', handleStatic('jspm_packages/system.js'));
app.use('/jspm_packages/system.js.map', handleStatic('jspm_packages/system.js.map'));
app.use('/jspm.browser.js', handleStatic('jspm.browser.js'));
app.use('/jspm.config.js', handleStatic('jspm.config.js'));
app.use('/index.js', handleStatic('index.js'));
app.use('/build.js', handleStatic('build.js'));
app.use('/build.js.map', handleStatic('build.js.map'));
app.use('/favicon.ico', handleStatic('favicon.ico'));
app.use('/static', express.static('/src/static'));

app.use('/graphql', proxy(GRAPHQL_URL));

function handleStatic(filename) {
  return function(req, res) {
    res.sendFile('/src/' + filename);
  };
}

app.use(handleRender);

function handleRender(req, res, next) {
  const networkInterface = createNetworkInterface(GRAPHQL_URL);

  const client = new ApolloClient({ networkInterface, reduxRootKey: 'api' });
  const store = createStore(
    combineReducers({
      api: client.reducer()
    }),
    applyMiddleware(client.middleware())
  );

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.error(error);
      res.status(500).send("500 Internal error")
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      var app = (<ApolloProvider store={store} client={client} {...renderProps}>
        <RouterContext {...renderProps} />
      </ApolloProvider>);
      getDataFromTree(app).then(function({store, client}) {
        let htmlString = ReactDOM.renderToString(app);
        let head = Helmet.rewind();
        htmlString = htmlTemplate(htmlString, store.getState(), head);
        res.send(htmlString);
      }).catch(function(error) {
        console.error(error);
        res.status(500).send("500 Internal error");
      });
    } else {
      res.status(404).send("404 Not Found");
    }
  });
};

app.listen('80', () => console.log('Listening on port 80'));

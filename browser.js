import React from 'react';
import { render } from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import routes from 'src/routes';


const GRAPHQL_URL = `/graphql/`;
const networkInterface = createNetworkInterface(GRAPHQL_URL);
const client = new ApolloClient({ networkInterface, reduxRootKey: 'api' });
const store = createStore(
  combineReducers({
    api: client.reducer()
  }),
  window.__INITIAL_STATE__,
  compose(
    applyMiddleware(client.middleware()),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render((<ApolloProvider store={store} client={client}>
    <Router {...renderProps} />
  </ApolloProvider>), document.getElementById('container'));
})

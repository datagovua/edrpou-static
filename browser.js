import React from 'react';
import { render } from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { SearchkitManager, SearchkitProvider } from 'searchkit';

import routes from 'src/routes';
import translateFunction from 'src/translate'


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

const searchkit = new SearchkitManager("/elasticsearch/");
searchkit.translateFunction = translateFunction.bind(searchkit);

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
  render((<SearchkitProvider searchkit={searchkit}>
    <ApolloProvider store={store} client={client}>
      <Router {...renderProps} />
    </ApolloProvider>
  </SearchkitProvider>), document.getElementById('container'));
})

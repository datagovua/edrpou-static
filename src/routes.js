import { Organizations } from 'src/organizations.js';
import { Api } from 'src/api.js';
import { App } from 'src/app.js';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/about/api') },
  childRoutes: [
    { path: 'organizations', component: Organizations },
    { path: 'about/api', component: Api }
  ]
}];

export default routes;

import { Home } from 'src/home.js';
import { Api } from 'src/api.js';
import { App } from 'src/app.js';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/home') },
  childRoutes: [
    { path: 'home', component: Home },
    { path: 'api', component: Api }
  ]
}];

export default routes;

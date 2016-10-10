import { Organizations, OrganizationsTemplate } from 'src/organizations.js';
import Organization from 'src/organization.js';
import { Api } from 'src/api.js';
import { App } from 'src/app.js';
import SearchRoute from 'src/search/routes';

const routes = [{
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('/about/api') },
  childRoutes: [
    SearchRoute,
    {
      path: 'organizations',
      component: OrganizationsTemplate,
      indexRoute: { component: Organizations },
      childRoutes: [
        { path: ':organizationId', component: Organization },
      ]
    },
    { path: 'about/api', component: Api }
  ]
}];

export default routes;

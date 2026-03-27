import { Routes } from '@angular/router';
import { Components } from './pages/components/components';
import { Templating } from './pages/templating/templating';
import { Signals } from './pages/signals/signals';
import { Form } from './pages/form/form';
import { Services } from './pages/services/services';
import { Http } from './pages/http/http';
import { routingRoutes } from './pages/routing/routing-routes';
import { Testing } from './pages/testing/testing';
import { Security } from './pages/security/security';

export const routes: Routes = [
    {path:'', component: Components},
    {path:'templating', component: Templating},
    {path:'signals', component: Signals},
    {path:'forms', component: Form},
    {path:'services', component: Services},
    {path:'http', component: Http},

    {path:'routing', loadChildren: () => routingRoutes},

    {path:'testing', component: Testing},
    {path:'security', component: Security},

    {path: '**', component: Components} // Not found
];

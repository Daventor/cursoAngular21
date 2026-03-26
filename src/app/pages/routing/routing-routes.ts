import { Routes } from "@angular/router";
import { Routing } from "./routing";
import { Info } from "./info/info";
import { Reviews } from "./reviews/reviews";
import { Detail } from "./detail/detail";
import { adminGuardGuard } from "../../core/guards/admin-guard-guard";
import { adminChildGuard } from "../../core/guards/admin-child-guard";
import { pendingChangesGuard } from "../../core/guards/pending-changes-guard";
import { featureToggleGuard } from "../../core/guards/feature-toggle-guard";
import { postResolverResolver } from "../../services/post-resolver-resolver";

// /routing
export const routingRoutes: Routes = [
    // {path: '', component: Routing},
    // {path: 'child', component: Routing},
    // {path: 'child/:id', component: Routing},

    // {
    //     path: 'another-child/:id',
    //     loadComponent: () => import('./routing').then((m) => m.Routing)
    // }

    {
        path: '',
        component: Routing,
        children: [
            { path: 'info', component: Info},
            { path: 'review', component: Reviews},
            { path: 'detail/:id', component: Detail },
            { path: 'detail/:id/action/:action', component: Detail }
        ]
    },

    // Redirecciones
    {path: 'redirection', redirectTo: 'info'},
    {path: 'redDetail/:id', redirectTo: 'detail/:id'},

    { path: 'news', redirectTo: 'blog', pathMatch: 'full' },
    // /news -> /blog
    // /news/article -> /blog/article <-- Esta no la haría con full

    {
        path: 'conditional/:id',
        redirectTo: (activatedRouteSnapshot) => {
            const id = activatedRouteSnapshot.params['id'];

            if(id > 10){
                return `detail/${id}`
            }
            return 'info'
        }
    },

    {
        path: 'admin',
        component: Routing,
        canActivate: [adminGuardGuard],
        canActivateChild: [adminChildGuard],
        children:[
            {path: 'users', component: Reviews,}
        ]
    },

    { path: 'confirm', canDeactivate: [pendingChangesGuard], component: Reviews },

    {   
        path: 'reports',
        canMatch: [featureToggleGuard],
        data: { feature: 'REPORTS_V2'},
        loadComponent: () => import('./info/info').then((c) => c.Info)
    },

    {
        path: 'reports',
        component: Info
    },

    { 
        path: 'posts',
        resolve: {
            posts: postResolverResolver
        },
        component: Detail
    }
]
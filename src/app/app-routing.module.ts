import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './routes.constants';

const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTES.RECIPES,
        pathMatch: 'full'
    },
    {
        path: ROUTES.RECIPES, loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

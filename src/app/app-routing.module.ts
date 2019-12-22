import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from 'app/routes.constants';
import { RecipesResolver } from 'app/core/resolvers/recipes.resolver';

const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTES.RECIPES,
        pathMatch: 'full'
    },
    {
        path: ROUTES.RECIPES, loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesModule),
        resolve: {recipes: RecipesResolver}
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

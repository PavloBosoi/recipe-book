import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './routes.constants';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: ROUTES.RECIPES,
        pathMatch: 'full'
    },
    {
        path: '',
        component: MainComponent,
        children: [
            {path: ROUTES.RECIPES, loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

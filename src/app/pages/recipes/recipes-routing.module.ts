import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTE_PARAMS } from 'app/routes.constants';
import { RecipeDetailsComponent } from 'app/pages/recipe-details/recipe-details.component';
import { RecipesComponent } from 'app/pages/recipes/recipes.component';


const routes: Routes = [
    {
        path: '',
        component: RecipesComponent
    },
    {
        path: ROUTE_PARAMS.ID,
        component: RecipeDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}

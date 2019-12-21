import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { ROUTE_PARAMS } from '../../routes.constants';

const routes: Routes = [
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from 'app/pages/recipe-details/recipe-details.component';
import { RecipesComponent } from 'app/pages/recipes/recipes.component';
import { RecipesResolver } from 'app/core/resolvers/recipes.resolver';

const routes: Routes = [
    {
        path: '',
        component: RecipesComponent
    },
    {
        path: ':id',
        component: RecipeDetailsComponent,
        resolve: {recipes: RecipesResolver}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {}

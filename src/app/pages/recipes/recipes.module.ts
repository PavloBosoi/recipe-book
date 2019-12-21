import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RecipesComponent } from 'app/pages/recipes/recipes.component';
import { RecipesRoutingModule } from 'app/pages/recipes/recipes-routing.module';
import { RecipeDetailsModule } from 'app/pages/recipe-details/recipe-details.module';

@NgModule({
    declarations: [
        RecipesComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        RecipeDetailsModule,
        MatPaginatorModule
    ]
})
export class RecipesModule { }

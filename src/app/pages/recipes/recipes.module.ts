import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';

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
        MatPaginatorModule,
        MatCardModule,
        MatToolbarModule
    ]
})
export class RecipesModule { }

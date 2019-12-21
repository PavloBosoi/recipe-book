import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailsModule } from '../recipe-details/recipe-details.module';

@NgModule({
    declarations: [
        RecipesComponent
    ],
    imports: [
        CommonModule,
        RecipesRoutingModule,
        RecipeDetailsModule
    ]
})
export class RecipesModule { }

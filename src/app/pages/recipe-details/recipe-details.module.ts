import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { RecipeDetailsComponent } from 'app/pages/recipe-details/recipe-details.component';

@NgModule({
    declarations: [
        RecipeDetailsComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RouterModule
    ]
})
export class RecipeDetailsModule {
}

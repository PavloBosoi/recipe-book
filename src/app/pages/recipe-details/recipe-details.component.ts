import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { IRecipe } from 'app/core/domain/IRecipe';
import { ActivatedRoute } from '@angular/router';
import { ROUTES_SLASHED } from 'app/routes.constants';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailsComponent implements OnInit {
    public readonly ROUTES_SLASHED = ROUTES_SLASHED;
    public currentRecipe: IRecipe;
    private recipes: IRecipe[] = this.route.snapshot.data['recipes'];
    private pageId = +this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      this.setCurrentRecipe();
  }
  private setCurrentRecipe() {
      this.currentRecipe = this.recipes.find((recipe: IRecipe) => recipe.id === this.pageId);
  }
}

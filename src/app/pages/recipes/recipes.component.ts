import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { IRecipe } from 'app/core/domain/IRecipe';
import { ROUTES_SLASHED } from 'app/routes.constants';
import { PaginationService } from 'app/core/services/pagination.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements OnInit {
    public readonly ROUTES_SLASHED = ROUTES_SLASHED;

    private recipes: IRecipe[] = this.route.snapshot.data['recipes'];
    public currentRecipes: IRecipe[];

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    constructor(
        private route: ActivatedRoute,
        public paginationService: PaginationService
    ) {
    }

    ngOnInit() {
        this.updatePaginatorValues();
    }

    public setRecipesAndPaginationValues(event: PageEvent) {
        this.setPaginationValues(event);
        this.setCurrentRecipes(event);
    }

    private setPaginationValues(event: PageEvent) {
        this.paginationService.pageSize = event.pageSize;
        this.paginationService.pageIndex = event.pageIndex;
    }

    private setCurrentRecipes(event: PageEvent) {
        const endPoint = event.pageSize * (event.pageIndex + 1);
        const startPoint = endPoint - event.pageSize;
        this.currentRecipes = this.recipes.slice(startPoint, endPoint);
    }

    private updatePaginatorValues() {
        this.paginator.page.emit({
            pageSize: this.paginationService.pageSize,
            pageIndex: this.paginationService.pageIndex,
            length: this.recipes.length
        });
    }
}

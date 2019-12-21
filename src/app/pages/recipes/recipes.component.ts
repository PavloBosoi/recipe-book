import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

import { CommonDataService } from 'app/core/services/common-data.service';
import { IRecipes } from 'app/core/domain/irecipes';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
    public recipes: IRecipes[];
    public readonly pageSize = 2;
    public readonly pageIndex = 0;

    @ViewChild(MatPaginator, {static: true})
    paginator: MatPaginator;

    constructor(public commonDataService: CommonDataService) {}

    ngOnInit() {
        this.updatePaginatorValues();
    }

    public setRecipes(event: PageEvent) {
        const endPoint = event.pageSize * (event.pageIndex + 1);
        const startPoint = endPoint - event.pageSize;
        this.recipes = this.commonDataService.recipes.slice(startPoint, endPoint);
    }

    private updatePaginatorValues() {
        this.paginator.page.emit({
            pageSize: this.pageSize,
            pageIndex: this.pageIndex,
            length: this.commonDataService.recipes.length
        });
    }
}

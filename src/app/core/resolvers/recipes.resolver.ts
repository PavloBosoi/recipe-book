import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IRecipe } from 'app/core/domain/IRecipe';
import { CommonDataService } from 'app/core/services/common-data.service';

@Injectable({providedIn: 'root'})
export class RecipesResolver implements Resolve<IRecipe[]> {
    constructor(private commonDataService: CommonDataService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IRecipe[]> | Promise<IRecipe[]> | IRecipe[] {
        return this.commonDataService.recipes;
    }

}

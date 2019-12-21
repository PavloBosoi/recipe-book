import { Injectable } from '@angular/core';
import { IRecipes } from 'app/core/domain/irecipes';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
    public readonly recipes: IRecipes[] = [
        {
            id: 1,
            title: '1',
            imgName: 'caponata-pasta_1.jpg'
        },
        {
            id: 2,
            title: '2',
            imgName: 'caponata-pasta_1.jpg'
        },
        {
            id: 3,
            title: '3',
            imgName: 'caponata-pasta_1.jpg'
        },
        {
            id: 4,
            title: '4',
            imgName: 'caponata-pasta_1.jpg'
        }
    ];

  constructor() { }
}

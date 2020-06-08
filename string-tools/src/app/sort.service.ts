import { Injectable } from '@angular/core';
import { TextUtilsService } from './text-utils.service';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor(private textUtilsService : TextUtilsService) { 
    this.textUtilsService = textUtilsService;
  }

  SortLines(values: string[]) {
    return values.sort(function (a, b) {
      return this.textUtilsService.CompareCaseInsensitive(a, b);
    });
  }

  SortArrays(values : string[][], indices : number[]) {

    if (indices.length === 0) {
      return values;
    }

    var index = indices[0];

    var valuesAtIndex = [];

    for (let i = 0; i < values.length; i++) {

      var value = values[i][index];

      if (!valuesAtIndex.includes(value)) {
        valuesAtIndex.push(value);
      }
    }

    valuesAtIndex = valuesAtIndex.sort();

    var arrayOfArrays:string[][][] = [];

    for (let i = 0; i < valuesAtIndex.length; i++) {
      arrayOfArrays[valuesAtIndex[i]] = [] as string[][];
    }

    for (let i = 0; i < valuesAtIndex.length; i++) {

      for (let j = 0; j < values.length; j++) {

        if (values[j][index] === valuesAtIndex[i]) {
          var arr = arrayOfArrays[valuesAtIndex[i]];
          
          arr.push(values[j]);
        }
      }
    }

    var newIndices = indices.slice(1);

    for (let i = 0; i < valuesAtIndex.length; i++) {
      arrayOfArrays[valuesAtIndex[i]] = this.SortArrays(arrayOfArrays[valuesAtIndex[i]], newIndices);
    }

    let newValues = [] as string[][];

    for (let i = 0; i < valuesAtIndex.length; i++) {
      for (let j = 0; j < arrayOfArrays[valuesAtIndex[i]].length; j++) {
        newValues.push(arrayOfArrays[valuesAtIndex[i]][j]);
      }
    }

    return newValues;
  }
}

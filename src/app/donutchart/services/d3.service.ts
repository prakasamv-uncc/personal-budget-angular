import { Injectable } from '@angular/core';
import * as d3 from 'd3';
import { DataService } from '../../services/data.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class D3Service {
  public d3 = d3;
  constructor(private dataService:DataService) { }

  /**
   * Generates random letter string with specified length
   * @param length: number
   */
  public getBudgetData(): Observable<any> {

    return this.dataService.getBudget().pipe(
      tap((data: any) => {
        console.log(data);
      })
    );
  }
}

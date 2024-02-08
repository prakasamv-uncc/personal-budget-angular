import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-budget-grid',
  standalone: true,
  imports: [TableModule],
  templateUrl: './budget-grid.component.html',
  styleUrl: './budget-grid.component.scss',
})
export class BudgetGridComponent implements OnInit {
  public budgetData: any;
  public budgetDataArray: any[] = [];
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    //API WILL BE CALLED ONLY ONCE IF THE ARRAY IS EMPTY
    if (this.budgetDataArray && this.budgetDataArray.length === 0) {
      this.budgetDataArray = this.getBudgetData();
      console.log(this.budgetDataArray);
    }
  }

  getBudgetData() {
    this.dataService.getBudget().subscribe((data: any) => {
      this.budgetDataArray = data.myBudget;
    });
    return this.budgetDataArray;
  }
}

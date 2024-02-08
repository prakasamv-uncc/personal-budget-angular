import { Component } from '@angular/core';
import { BudgetGridComponent } from "../budget-grid/budget-grid.component";
import { DonutchartComponent } from '../donutchart/donutchart.component';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ChartjsdonutComponent } from "../chartjsdonut/chartjsdonut.component";
@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  imports: [BudgetGridComponent, DonutchartComponent, TabViewModule, TabMenuModule, TableModule, ChartjsdonutComponent]
})
export class LandingComponent {

}

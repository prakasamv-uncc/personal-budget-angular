import { Component, ElementRef, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chartjsdonut',
  standalone: true,
  imports: [],
  templateUrl: './chartjsdonut.component.html',
  styleUrl: './chartjsdonut.component.scss'
})
export class ChartjsdonutComponent implements OnInit   {
  public chart: any;
  public dataSources = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
          "#ff6384",
          "#36a2eb",
          "#fd6b19",
          "#fc6d19",
          "#ff6c20",
          "#dfd619",
          "#e6a2ec",
        ],
        hoveroffset: 4,
      },
    ],
    labels: [],
  };
  constructor(private elementRef: ElementRef, private dataService: DataService) { }

 ngOnInit(){
    this.getData();

 }

getData(){
  //API Will be triggered only if data is empty
  if(this.dataSources && this.dataSources.datasets && this.dataSources.datasets[0].data.length === 0){

  this.dataService.getBudget().subscribe((data: any) => {
    data.myBudget.forEach((x: { title: string; budget: number; }) => { // Specify the type of 'x' parameter
      (this.dataSources.datasets[0].data as number[]).push(x.budget); // Specify the type of 'data' property
      (this.dataSources.labels as string[]).push(x.title); // Specify the type of 'labels' property
    });

  });
  this.createChart();
}
}


 createChart(){
  let htmlRef = this.elementRef.nativeElement.querySelector(`#MyChart`);
  this.chart = new Chart(htmlRef, {
    type: 'pie',

    data: this.dataSources,
    options: {
      aspectRatio:2.5
    }

  });
}
}




/* {// values on X-Axis
      labels: ['Red', 'Pink','Green','Yellow','Orange','Blue', ],
       datasets: [{
  label: 'My First Dataset',
  data: [300, 240, 100, 432, 253, 34],
  backgroundColor: [
    'red',
    'pink',
    'green',
    'yellow',
    'orange',
    'blue',
  ],
  hoverOffset: 4
}],
    } */

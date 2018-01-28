import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }
  public doughnutChartLabels: string[] = ['Ionic',
    'Java',
    'CSS',
    'C',
    'JavaScript',
    'HTML',
    'C++',
    'Node.js',
    'jQuery',
    'MONGO DB',
    'Angular.js 1.x'];
  public doughnutChartData: number[] = [28,
    10,
    10,
    10,
    10,
    35,
    10,
    20,
    35,
    4,
    30];
    
  public doughnutChartColors: any[] = [{
    backgroundColor:['#0dab33',
    '#811BD6',
    '#4a9a1d',
    '#9CBABA',
    '#1f7332',
    '#6AE128',
    '#482e5f',
    '#9ba70d',
    '#0dab31',
    '#811BD6',
    '#6eb57f']
  }];
  public doughnutChartType: string = 'doughnut';

  public polarAreaChartLabels:string[] = ['Android Programming',
  'jBPM',
  'Data sciences with R',
  'Haskel'
  ];
  public polarAreaChartData:number[] = [10,
    10,
    15,
    5];
  public polarAreaChartColor =[{
    backgroundColor:['#811BD9',
    '#b2e128',
    '#b20128',
    '#a64775']
  }];
  public polarAreaLegend:boolean = true;
 
  public polarAreaChartType:string = 'polarArea';
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
  }

}

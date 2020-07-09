import { Component, OnInit } from '@angular/core';
import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public polarAreaChartLabels: Label[] = ['Tamilnadu', 'Maharashtra', 'Delhi'];
  public polarAreaChartData: SingleDataSet = [46483, 91065, 23452];
  public polarAreaLegend = true;
  

  public polarAreaChartType: ChartType = 'polarArea';
  constructor() { }

  ngOnInit(): void {
  }
  
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}

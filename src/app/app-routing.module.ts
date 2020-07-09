import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BarChartComponent} from 'src/app/bar-chart/bar-chart.component';
import {BubbleChartComponent} from 'src/app/bubble-chart/bubble-chart.component';
import {LineChartComponent} from 'src/app/line-chart/line-chart.component';
import {PieChartComponent} from 'src/app/pie-chart/pie-chart.component';
import {RadarChartComponent} from 'src/app/radar-chart/radar-chart.component';
import {DoughnutChartComponent} from 'src/app/doughnut-chart/doughnut-chart.component'
import {ScatterChartComponent} from 'src/app/scatter-chart/scatter-chart.component'
import { PolarAreaChartComponent } from './polar-area-chart/polar-area-chart.component';
import {HomeComponent} from 'src/app/home/home.component'
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"bar",
    component:BarChartComponent
  },
  {
    path:"bubble",
    component:BubbleChartComponent
  },
  {
    path:"line",
    component:LineChartComponent
  },
  {
    path:"pie",
    component:PieChartComponent
  },
  {
    path:"radar",
    component:RadarChartComponent
  },
  {
    path:"doughnut",
    component:DoughnutChartComponent
  },
  {
    path:"scatter",
    component:ScatterChartComponent
  },
  {
    path:"polar",
    component:PolarAreaChartComponent
  }
  
];
RouterModule.forRoot(routes, {useHash: true})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

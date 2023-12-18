import { Component, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

@Component({
  selector: 'app-chart-eight',
  templateUrl: './chart-eight.component.html',
  styleUrls: ['./chart-eight.component.scss']
})
export class ChartEightComponent {
  @ViewChild("chart") chart:any= ChartComponent;
  public chartOptions:any={
    series: undefined,
  chart: undefined,
  responsive: undefined,
  labels: undefined
  };

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 22],
      chart: {
        type: "donut"
      },
      labels: ["Itely", "USA", "India", "Shrilanka"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
}

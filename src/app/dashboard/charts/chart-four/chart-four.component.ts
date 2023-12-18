import { Component } from '@angular/core';
import { registerables, Chart, Colors  } from 'node_modules/chart.js'

@Component({
  selector: 'app-chart-four',
  templateUrl: './chart-four.component.html',
  styleUrls: ['./chart-four.component.scss']
})
export class ChartFourComponent {
  ngOnInit() {
    Chart.register(...registerables);
    Chart.register(Colors);

    Chart.defaults.font.size = 8;
    Chart.defaults.backgroundColor = '#fff';
    Chart.defaults.borderColor = 'white';

    var myChart = new Chart("myChart-4", {
      type: 'radar',
      data: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
        
      },
      options: {
        scales: {
          r: {
            angleLines: {
              color: 'red'
            }
          }
        },
        elements: {
          line: {
            borderWidth: 3
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#fff',
              font: {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 10,
                weight: 'lighter' ,
              }
            }
          }
        },
        responsive: true, // Enable responsiveness
    maintainAspectRatio: false,
      }
    });
  }
}

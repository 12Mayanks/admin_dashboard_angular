import { Component } from '@angular/core';
import { registerables, Chart, Colors  } from 'node_modules/chart.js'
@Component({
  selector: 'app-chart-three',
  templateUrl: './chart-three.component.html',
  styleUrls: ['./chart-three.component.scss']
})
export class ChartThreeComponent {
  ngOnInit() {
    Chart.register(...registerables);
    Chart.register(Colors);

    Chart.defaults.font.size = 8;

    var myChart = new Chart("myChart-3", {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 5
        }]
      },
      options: {
        scales: {
          yAxis: {
            beginAtZero: true
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

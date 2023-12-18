import { Component } from '@angular/core';
import { registerables, Chart, Colors  } from 'node_modules/chart.js'
@Component({
  selector: 'app-chart-two',
  templateUrl: './chart-two.component.html',
  styleUrls: ['./chart-two.component.scss']
})
export class ChartTwoComponent {
  ngOnInit() {
    Chart.register(...registerables);
    Chart.register(Colors);

    Chart.defaults.font.size = 8;

    var myChart = new Chart("myChart-2", {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June' , 'July'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
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

import { Component, OnInit } from '@angular/core';
import { registerables, Chart, Colors } from 'node_modules/chart.js'

@Component({
  selector: 'app-chart-one',
  templateUrl: './chart-one.component.html',
  styleUrls: ['./chart-one.component.scss']
})

export class ChartOneComponent implements OnInit {

  ngOnInit() {
    Chart.register(...registerables);
    Chart.register(Colors);

    Chart.defaults.font.size = 9;
    Chart.defaults.color = '#fff';
    Chart.defaults.backgroundColor = '#fff';
    Chart.defaults.borderColor = 'grey';


    var mChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
          backgroundColor: 'pink'
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

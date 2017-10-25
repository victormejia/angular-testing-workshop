import { Component, AfterViewInit, ElementRef } from '@angular/core';

declare var Chart: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const ctx = this.el.nativeElement.querySelector('canvas');

    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'operations',
          // backgroundColor: 'rgb(255, 99, 132)',
          borderColor: '#5DB4B7',
          data: [12, 10, 7, 22, 20, 25],
        }]
      },

      // Configuration options go here
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        hover: {
          mode: 'index'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month',
              fontFamily: '"Titillium Web", sans-serif'
            },
            ticks: {
              fontFamily: '"Titillium Web", sans-serif'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value',
              fontFamily: '"Titillium Web", sans-serif'
            },
            ticks: {
              fontFamily: '"Titillium Web", sans-serif'
            }
          }]
        },
        title: {
          display: true,
          text: '2017 Operations',
          fontFamily: '"Titillium Web", sans-serif'
        }
    }
    });
  }

}

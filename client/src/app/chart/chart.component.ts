import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ApplesDataService } from '../apples-data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor(private applesDataService: ApplesDataService) {  }
  chart;

ngOnInit() {
    this.showApples();
  }

showApples() {
    this.applesDataService.getApples()
      .pipe(
        map((data) => data[0]),
        map(data => data.map(apple => {
          return [
            Number(apple.x_position),
            Number(apple.y_position)
          ];
        }))).subscribe((data) => {
          const appelsNum = data.length;
          this.chartOption(data, appelsNum);
      });
  }

  chartOption(data, appelsNum) {
    this.chart = new Chart({
      chart: {
        type: 'scatter',
        zoomType: 'xy'

      },
      title: {
        text: `${appelsNum} Apples`
      },
      credits: {
        enabled: false
      },
      legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: '#FFFFFF',
        borderWidth: 2
    },
      plotOptions: {
        scatter: {
          marker: {
            radius: 5,
            states: {
              hover: {
                enabled: true,
                lineColor: 'rgb(100,100,100)'
              }
            }
          },
          states: {
            hover: {
              marker: {
                enabled: false
              }
            }
          },
          tooltip: {
            headerFormat: '<b>Big Apple</b><br>',
          }
        }
      },
      series: [{
          type: 'scatter',
          name: 'Apples',
          color: '#c80909',
          data
        }]
    });
  }

}

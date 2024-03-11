import { Component, OnInit } from '@angular/core';
import { AuthKeycloakService } from '@core/auth/services/AuthKeycloakLocal.service';
import { ApexOptions } from 'apexcharts';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public chartOptions: Partial<ApexOptions>;

  get chart(): any {
    return this.chartOptions.chart;
  }

  constructor(private authServices: AuthKeycloakService) {}

  ngOnInit() {
    this.chartOptions = {
      series: [70, 50],
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: false,
        },
      },
      title: {
        text: 'My First Angular ApexChart',
        align: 'center',
        style: {
          color: 'var(--ion-color-primary)'
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '20%',
            background: '#fff',
            image: undefined,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px',
            },
            value: {
              formatter: function (val) {
                return parseInt(val.toString(), 10).toString();
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'round',
      },
    };
  }

  logout() {
    this.authServices.logout();
  }
}

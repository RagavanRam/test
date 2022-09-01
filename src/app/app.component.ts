import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { ExcelService } from './excel.service';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'test';
  // imgSelected: any;
  // @ViewChild('canvas') waterMark: ElementRef | any;

  // addWaterMark(event: any) {
  //   let canvas: HTMLCanvasElement = this.waterMark.nativeElement;
  //   let context: any = canvas.getContext('2d');

  //   let img1 = new Image();
  //   let img2 = new Image();

  //   const image: Blob = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     // this.imgSelected = reader.result;
  //     img1.src = reader.result as string;
  //   };
  //   reader.readAsDataURL(image);

  //   img1.onload = () => {
  //     // canvas.width = img1.width;
  //     // canvas.height = img1.height;
  //     img2.src = '../assets/ORIVECRM-WaterMark.png';
  //   };

  //   img2.onload = () => {
  //     canvas.width = img2.width;
  //     canvas.height = img2.height;
  //     context.drawImage(img1, 0, 0);
  //     context.drawImage(img2, 0, canvas.height - img2.height);

  //     const imgURL = canvas.toDataURL('image/jpeg');
  //     this.imgSelected = imgURL;
  //     console.log(this.imgSelected);
  //     console.log(image);
  //   };
  // }

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor(private excelService: ExcelService) {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
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

  generateExcel() {
    this.excelService.generateExcel();
  }
}

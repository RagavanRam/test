import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test';
  imgSelected: any;
  @ViewChild('canvas') waterMark: ElementRef | any;

  addWaterMark(event: any) {
    let canvas: HTMLCanvasElement = this.waterMark.nativeElement;
    let context: any = canvas.getContext('2d');

    let img1 = new Image();
    let img2 = new Image();

    const image: Blob = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      // this.imgSelected = reader.result;
      img1.src = reader.result as string;
    };
    reader.readAsDataURL(image);

    img1.onload = () => {
      // canvas.width = img1.width;
      // canvas.height = img1.height;
      img2.src = '../assets/ORIVECRM-WaterMark.png';
    };

    img2.onload = () => {
      canvas.width = img2.width;
      canvas.height = img2.height;
      context.drawImage(img1, 0, 0);
      context.drawImage(img2, 0, canvas.height - img2.height);

      const imgURL = canvas.toDataURL('image/jpeg');
      this.imgSelected = imgURL;
      console.log(this.imgSelected);
      console.log(image);
    };
  }
}

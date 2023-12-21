import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'admin';
  //  ngAfterViewInit() {}
  scriptPaths: string[] = [
    '/assets/js/Chart.min.js',
    '/assets/js/dynamic-pie-chart.js',
    '/assets/js/moment.min.js',
    '/assets/js/fullcalendar.js',
    '/assets/js/jvectormap.min.js',
    '/assets/js/world-merc.js',
    '/assets/js/polyfill.js',
    '/assets/js/main.js',
  ];
  ngAfterViewInit() {
    // alert("skdjvskjd")
    this.scriptPaths.forEach((path) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = path;

      // Thêm vào sau khi DOM đã được load hoàn toàn
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(scriptElement);
      });
    });
  }
}

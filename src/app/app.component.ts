import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'The Women';
  //  ngAfterViewInit() {}
  scriptPaths: string[] = [
    '/assets/js/jquery.min.js',
    '/assets/js/jquery-migrate-3.0.0.js',
    '/assets/js/jquery-ui.min.js',
    '/assets/js/popper.min.js',
    '/assets/js/bootstrap.min.js',
    '/assets/js/slicknav.min.js',
    '/assets/js/owl-carousel.js',
    '/assets/js/magnific-popup.js',
    '/assets/js/waypoints.min.js',
    '/assets/js/finalcountdown.min.js',
    '/assets/js/nicesellect.js',
    '/assets/js/flex-slider.js',
    '/assets/js/scrollup.js',
    '/assets/js/onepage-nav.min.js',
    '/assets/js/easing.js',
    '/assets/js/active.js',
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

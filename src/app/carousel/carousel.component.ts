import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [0, 1, 2, 3].map((n) => `assets/img/${n}.webp`);
  constructor() { }

  ngOnInit(): void {
  }

}

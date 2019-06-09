import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  img = [0].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [0,1,2,3].map(() => `https://picsum.photos/100/100?random&t=${Math.random()}`);
}

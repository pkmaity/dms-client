import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  items = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}

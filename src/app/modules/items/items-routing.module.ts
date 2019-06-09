import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component'
import { ItemComponent } from './item/item.component'
const routes: Routes = [
  {
    path: ":category/:items",
    component: ItemsComponent
  },
  {
    path: ":category/:items/:item",
    component: ItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }

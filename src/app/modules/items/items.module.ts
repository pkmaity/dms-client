import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatModule } from 'src/app/common/mat/mat.module';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemsComponent, ItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatModule
  ]
})
export class ItemsModule { }

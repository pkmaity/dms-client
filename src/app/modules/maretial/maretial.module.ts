import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule

} from '@angular/material'

const ListOfModule = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTabsModule
];

@NgModule({
  declarations: [],
  imports: [ListOfModule],
  exports: [ListOfModule]
})
export class MaretialModule { }

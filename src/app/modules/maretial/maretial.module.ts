import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule

} from '@angular/material'

const ListOfModule = [
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [ListOfModule],
  exports: [ListOfModule]
})
export class MaretialModule { }

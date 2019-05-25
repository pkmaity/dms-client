import { Component } from '@angular/core';
import { LoginComponent } from './common/login/login.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent);
  }
  title = 'client';
}

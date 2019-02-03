// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import 'hammerjs';
// import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';
// import { FlexLayoutModule } from '@angular/flex-layout';


// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, FlexLayoutModule,
//   ],
//   exports: [MaterialModule, BrowserAnimationsModule, MatButtonModule, MatToolbarModule, MatIconModule],
// })
// export class MaterialModule { }
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
  exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule],
})
export class MaterialModule {}

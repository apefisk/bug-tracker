import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { StatusPipe } from './pipe/status.pipe';
import { SeverityPipe } from './pipe/severity.pipe';


@NgModule({
  declarations: [
  StatusPipe,
  SeverityPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StatusPipe,
    SeverityPipe
  ]
})
export class SharedModule { }

import { TextSlicerPipe } from './pipe/text-slicer.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IconModule } from './../icon/icon.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDataTableComponent } from './ngx-data-table/ngx-data-table.component';

@NgModule({
  declarations: [NgxDataTableComponent, TextSlicerPipe],
  imports: [CommonModule, IconModule, HttpClientModule, AppRoutingModule],
  exports: [NgxDataTableComponent],
})
export class DataTableModule {}

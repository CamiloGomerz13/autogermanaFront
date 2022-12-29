import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 
{
  DxAccordionModule,
  DxDataGridModule,
  DxButtonModule,
  DxPopupModule,
  DxScrollViewModule,
  DxFormModule
 } from 'devextreme-angular';
import TextBox from "devextreme/ui/text_box";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxAccordionModule,
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxScrollViewModule,
    DxFormModule,
    TextBox
  ]
})
export class DevExtremeModule { }

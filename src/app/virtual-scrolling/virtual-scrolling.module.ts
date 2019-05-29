import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as material from '@angular/material';


@NgModule({
  declarations: [VirtualScrollComponent],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    VirtualScrollComponent
  ]
})
export class VirtualScrollingModule { }

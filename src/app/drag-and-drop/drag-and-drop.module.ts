import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropComponent } from './drag-and-drop/drag-drop.component';
import { DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [DragDropComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  exports: [
    DragDropComponent
  ]
})
export class DragAndDropModule { }

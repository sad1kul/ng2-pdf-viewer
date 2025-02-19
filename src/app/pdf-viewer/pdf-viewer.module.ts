/**
 * Created by vadimdez on 01/11/2016.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer.component';

export * from './typings';

@NgModule({
  imports: [
    CommonModule,
    PdfViewerComponent
  ],
  exports: [PdfViewerComponent]
})
export class PdfViewerModule {}

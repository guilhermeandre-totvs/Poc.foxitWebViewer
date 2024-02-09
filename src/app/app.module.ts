import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PDFViewerComponent } from './pdfviewer/pdfviewer.component';
@NgModule({
  declarations: [
    AppComponent,
    PDFViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PDFViewerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

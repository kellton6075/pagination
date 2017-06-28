import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationmoduleModule } from '../paginationmodule/app.module'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PaginationmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

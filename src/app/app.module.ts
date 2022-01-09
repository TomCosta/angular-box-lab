import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxFormComponent } from './box-form/box-form.component';
import { BoxTableComponent } from './box-table/box-table.component';
import { SearchPipe } from './pipes/search-pipe/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoxFormComponent,
    BoxTableComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

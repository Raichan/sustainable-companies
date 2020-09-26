import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompaniesService } from './components/companies/companies.service';
import { DocumentsService } from './components/documents/documents.service';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CompaniesService,
    DocumentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

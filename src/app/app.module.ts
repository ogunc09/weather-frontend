import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from "primeng/calendar";
import {SelectButtonModule} from "primeng/selectbutton";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AccordionModule} from 'primeng/accordion';
import  {DropdownModule} from 'primeng/dropdown';
import  {InputTextModule} from "primeng/inputtext";


@NgModule ({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CalendarModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }

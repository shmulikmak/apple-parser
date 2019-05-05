import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ApplesDataService } from './apples-data.service';
import { ChartComponent } from './chart/chart.component';

@NgModule({
   declarations: [
      AppComponent,
      ChartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      ChartModule
   ],
   providers: [
      ApplesDataService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

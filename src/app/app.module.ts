import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './graphs/pie-chart/pie-chart.component';
import { LineGraphComponent } from './graphs/line-graph/line-graph.component';
import { BarGraphComponent } from './graphs/bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    PieChartComponent,
    LineGraphComponent,
    BarGraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

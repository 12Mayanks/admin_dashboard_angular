import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { DisplayDirective } from './display.directive';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { ChartOneComponent } from './dashboard/charts/chart-one/chart-one.component';
import { ChartTwoComponent } from './dashboard/charts/chart-two/chart-two.component';
import { ChartThreeComponent } from './dashboard/charts/chart-three/chart-three.component';
import { ChartFourComponent } from './dashboard/charts/chart-four/chart-four.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import {  CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ChartFiveComponent } from './dashboard/charts/chart-five/chart-five.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceTableComponent } from './dashboard-data/invoice-table/invoice-table.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartSixComponent } from './dashboard/charts/chart-six/chart-six.component';
import { ChartSevenComponent } from './dashboard/charts/chart-seven/chart-seven.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ChartEightComponent } from './dashboard/charts/chart-eight/chart-eight.component';



@NgModule({
  declarations: [
    AppComponent,
    DisplayDirective,
    DashboardComponent,
    ChartOneComponent,
    ChartTwoComponent,
    ChartThreeComponent,
    ChartFourComponent,
    UserInfoComponent,
    ChartFiveComponent,
    InvoiceTableComponent,
    ChartSixComponent,
    ChartSevenComponent,
    ChartEightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    CanvasJSAngularChartsModule,
    MatTableModule,
    HttpClientModule,
    NgApexchartsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

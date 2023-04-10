import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FirstSceneComponent } from './first-scene/first-scene.component';
import { MissionComponent } from './mission/mission.component';
import { ProductsComponent } from './products/products.component';
import { StrategyComponent } from './strategy/strategy.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PressreleaseComponent } from './pressrelease/pressrelease.component';
import { ReportsComponent } from './reports/reports.component';
import { SocietyComponent } from './society/society.component';
import { CareerComponent } from './career/career.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InvestmentComponent } from './investment/investment.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FirstSceneComponent,
    MissionComponent,
    ProductsComponent,
    StrategyComponent,
    NumbersComponent,
    PressreleaseComponent,
    ReportsComponent,
    SocietyComponent,
    CareerComponent,
    ContactsComponent,
    InvestmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

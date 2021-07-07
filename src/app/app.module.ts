import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import { CustomerDisplayComponent } from './customers/customer-display/customer-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CustomerDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

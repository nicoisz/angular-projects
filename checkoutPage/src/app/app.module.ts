import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PlaceOrderComponent,
    DeliveryComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

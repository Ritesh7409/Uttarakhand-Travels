import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContactService } from './contact/contact.service';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DiscountComponent } from './discount/discount.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { DestinationServiceService } from './header/destination-service.service';
import { HillStationComponent } from './dashboard/hill-station/hill-station.component';
import { WildLifeComponent } from './dashboard/wild-life/wild-life.component';
import { TrekkingComponent } from './home/trekking/trekking.component';
import { PilgrimageComponent } from './dashboard/pilgrimage/pilgrimage.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DiscountComponent,
    DestinationsComponent,
    ContactComponent,
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HillStationComponent,
    WildLifeComponent,
    TrekkingComponent,
    PilgrimageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DestinationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

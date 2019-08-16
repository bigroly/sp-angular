// root Angular stuff:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 3rd party modules
import {
  CollapseModule
} from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';

// our components
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// our services:
import { SpUserService } from './services/sp-user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    SpUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

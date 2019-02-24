import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule  } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { SignUpService } from './service/sign-up.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProfileService } from './service/profile.service';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { MatSelectModule,MatOptionModule,MatListModule, MatIconModule, MatMenuModule, MatButtonModule,MatInputModule,MatFormFieldModule,MatCardModule, MatDialogModule } from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import{Ng2CarouselamosModule} from 'ng2-carouselamos';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FooterComponent } from './component/footer/footer.component';
import { EventsComponent } from './component/events/events.component';
import { ContactComponent } from './component/contact/contact.component';


const config = {
  apiKey: "AIzaSyBT2Mi8CZ_6KOmIROdg2A2d_pknbI6ukEs",
  authDomain: "eventorganizer-6df12.firebaseapp.com",
  databaseURL: "https://eventorganizer-6df12.firebaseio.com",
  projectId: "eventorganizer-6df12",
  storageBucket: "eventorganizer-6df12.appspot.com",
  messagingSenderId: "944241107231"
};



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    EventsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule  ,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    Ng2CarouselamosModule,
    NgbModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  providers: [{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},SignUpService,ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

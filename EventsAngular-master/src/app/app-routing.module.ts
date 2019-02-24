import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
import { ServiceTabComponent } from './Component/service-tab/service-tab.component';
import { HomepageComponent } from './component/homepage/homepage.component';

const appRoutes: Routes = [
  {path: '', component : HomepageComponent},
  {path : 'servicetab', component : ServiceTabComponent}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule {

}

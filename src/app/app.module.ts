import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { HomeComponent } from './layout/home/home.component';
import { UserMenuComponent } from './layout/user-menu/user-menu.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'overview', component: OverviewComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    OverviewComponent,
    HeaderComponent,
    FooterComponent,
    LoginPageComponent,
    HomeComponent,
    UserMenuComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
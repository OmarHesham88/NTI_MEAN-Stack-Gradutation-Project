import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Import RouterModule here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactComponent } from './contact/contact.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { AboutComponent } from './about/about.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { HttpClientModule } from '@angular/common/http';
import { UserService } from './abouts.service';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    BranchesComponent,
    ContactComponent,
    WorktimeComponent,
    AboutComponent,
    LoginComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard]
      },
      { path: 'login', component: LoginComponent }
    ])
  ],
  providers: [
    provideClientHydration(),
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

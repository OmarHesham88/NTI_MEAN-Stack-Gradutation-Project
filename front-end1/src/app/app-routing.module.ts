import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactComponent } from './contact/contact.component';
import { WorktimeComponent } from './worktime/worktime.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main' , component: MainComponent},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'menu' , component: MenuComponent},
  {path: 'branches' , component: BranchesComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'worktime' , component: WorktimeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }

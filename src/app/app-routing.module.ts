import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { loginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomePageComponent
  },
  {
    path: 'main',
    component: MainPageComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

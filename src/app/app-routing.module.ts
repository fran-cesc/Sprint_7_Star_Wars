import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'welcome-page',
    component: WelcomePageComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  },
  {
    path: 'auth-page',
    component: AuthPageComponent
  },
  {
    path: '**',
    redirectTo: 'welcome-page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

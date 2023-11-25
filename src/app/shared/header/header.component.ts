import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public router = inject(Router);
  public usersService = inject(UsersService);

  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/welcome']);
  }
}

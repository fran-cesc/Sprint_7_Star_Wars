import { Component, inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  public usersService = inject(UsersService);
}

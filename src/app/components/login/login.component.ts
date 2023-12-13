import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  usersService = inject(UsersService);
  router = inject(Router);

  constructor(){
    this.form = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.usersService.login(this.form.value);
    console.log("resposta del login");
    console.log(response);

    if (!response.error) {
      localStorage.setItem('token', response.accessToken);
      this.form.reset();
      this.router.navigate(['/welcome']);
    }
  }
}

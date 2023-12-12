import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  form: FormGroup;
  isRegistered: boolean = false;

  router = inject(Router);
  usersService = inject(UsersService);

  constructor() {
    this.form = new FormGroup({
      // username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  async onSubmit() {

    if (this.form.invalid) {
      return;
    }

    const userMail = await this.form.get('email')!.value;
    this.isRegistered = await this.usersService.isMailRegistered(userMail);

    if (this.isRegistered) {
      return;
    } else {
      const response = await this.usersService.register(this.form.value);
      this.form.reset();
      alert("User registered");
      this.router.navigate(['/main']);
    }
  }
}

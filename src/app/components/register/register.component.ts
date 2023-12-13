import { Component, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  activeModal = inject(NgbActiveModal);

  form: FormGroup;
  isRegistered: boolean = false;

  router = inject(Router);
  usersService = inject(UsersService);

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  async onSubmit() {

    try{
      if (this.form.invalid) {
        return;
      }
      const userMail = await this.form.get('email')!.value;
      this.isRegistered = await this.usersService.isMailRegistered(userMail);
      if (this.isRegistered) {
        return;
      } else {
        await this.usersService.register(this.form.value);
        const response = await this.usersService.login(this.form.value);
        if (!response.error) {
          localStorage.setItem('token', response.accessToken);
          this.form.reset();
          alert("User registered");
          this.activeModal.close();
          this.router.navigate(['/welcome']);
        }
      }
    } catch (error){
      throw error;
    }

    }
}

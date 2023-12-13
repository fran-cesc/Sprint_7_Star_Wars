import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  activeModal = inject(NgbActiveModal);
  usersService = inject(UsersService);
  router = inject(Router);

  constructor(){
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ])
    })
  }

  async onSubmit(){
    try{
      const response = await this.usersService.login(this.form.value);
      if (!response.error) {
        localStorage.setItem('token', response.accessToken);
        this.form.reset();
        this.activeModal.close();
        this.router.navigate(['/main']);
    }
    } catch (error){
      alert("User not registered");
      this.form.reset()
    }
  }
}

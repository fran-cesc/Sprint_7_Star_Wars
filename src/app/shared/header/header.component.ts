import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public router = inject(Router);
  public usersService = inject(UsersService);
  private modalService = inject(NgbModal);


  public logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/welcome']);
  }

  open(event: Event){
    const id = (event.target as HTMLButtonElement).id;
    if (id === 'register') {
      const modalRef = this.modalService.open(RegisterComponent);
    } else if (id === 'login'){
      const modalRef = this.modalService.open(LoginComponent);
    } else return;
  }
}

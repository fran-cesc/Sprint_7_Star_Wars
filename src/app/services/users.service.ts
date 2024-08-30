import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private HttpClient = inject(HttpClient);
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://localhost:3000';
  }

  register(formValue: User){
    return firstValueFrom(
      this.HttpClient.post<User>(`${this.baseUrl}/register`, formValue)
    );
  }

  login(formValue: User) {
    return firstValueFrom(
      this.HttpClient.post<User>(`${this.baseUrl}/login`, formValue)
    );
  }

  async isMailRegistered(email: string) {

    try {
      const users: User[] = await firstValueFrom(
        this.HttpClient.get<User[]>(`${this.baseUrl}/users?email=${email}`)
      );
      const isRegistered = users.length > 0;
      return isRegistered;
    } catch (error) {
      throw new Error('Error verifying email:' + error);
    }
  }

  isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}

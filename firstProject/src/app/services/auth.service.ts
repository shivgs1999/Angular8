import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   checkUserNamePassword(username: string, password:any): boolean {
    if (username == 'Shivam@gmail.com' && password == 'Shivam123') {
      
      localStorage.setItem('username','Shivam');
      return true;
    } else {
      return false;
    }
  }
}

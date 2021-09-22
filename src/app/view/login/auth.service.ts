import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthent: boolean = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  startLog(usuario: Usuario) {
    if (usuario.name === '@usuario' && usuario.password === 'pass') {
        this.userAuthent = true;
        this.showMenuEmitter.emit(true);
        this.router.navigate(['/']);
    } else {
        this.userAuthent = false;
        this.showMenuEmitter.emit(false);
    }
  }

  userStillAuthent() {
    return this.userAuthent;
  }



}
 
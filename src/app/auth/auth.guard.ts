// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.usuarioService.estaAutenticado()) {
      return true;
    } else {
      // Redirige al usuario a la página de inicio de sesión si no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}

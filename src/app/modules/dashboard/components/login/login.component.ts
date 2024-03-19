import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../../../../firebase/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIcon, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  #fb = inject(FormBuilder);
  authService = inject(FirebaseService);
  router = inject(Router);

  public errors: string | undefined;

  public loginForm = this.#fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.minLength(3), Validators.required]],
  });

  public submit() {
    const isValid = this.loginForm.valid;
    console.log(isValid)
    if (isValid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: () => {
            this.router.navigateByUrl('/');
          },
          error: (err) => {
            this.errors = 'Email ou Senha Inválidos!';
          }
        });
    }
  }


}

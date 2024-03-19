import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseAuth = inject(Auth)

  login(email: any, password: any): Observable<any>{
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(()=>{});

    return from(promise)
  }
  
}

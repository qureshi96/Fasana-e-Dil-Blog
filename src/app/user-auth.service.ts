import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private auth: AngularFireAuth) { }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(), provider);
      // Use result.user here
      return result;
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }
}

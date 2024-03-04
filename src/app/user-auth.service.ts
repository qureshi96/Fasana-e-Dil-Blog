import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private user = new BehaviorSubject(null);
  public logoutclicked: boolean=false;
  public loginclicked:boolean = false;

  constructor(private auth: AngularFireAuth) { 
    this.initAuthListener();
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      const result = await signInWithPopup(getAuth(), provider);
      // Use result.user here
      this.logoutclicked=false;
      this.loginclicked=true;
      return result;
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }

  async logout(){
    try{
      await signOut(getAuth());
      this.loginclicked=false;
      this.logoutclicked=true;
       console.log("signed out");
    }
    catch(error){
      console.error("failed",error);
    }
  }

  private initAuthListener(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) =>{
        if(user){
          this.user.next(user);
        }
        else{
          this.user.next(null);
        }
    });

  }
  getUser(){
    return this.user.asObservable();
  }

}

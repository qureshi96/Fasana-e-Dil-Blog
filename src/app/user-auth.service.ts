
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { userModel } from './data/userModel';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements OnInit {
  private user = new BehaviorSubject(null);
  public userDetails: userModel=new userModel();

  constructor() { 
    
  }
  
  ngOnInit(): void {
  
   
  }
  decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }

  googleSignIn(user) {
    this.user.next(user);
    const payload=this.decodeToken(user.credential);
    this.userDetails.setUserDetails(payload.name,payload.picture,payload.email);
    console.log(this.userDetails);

  }
  logout(){
    this.user.next(null);
    this.userDetails=new userModel();
    console.log(this.userDetails);
  }

  getUser(){
    return this.user.asObservable();
  }

}

declare var google:any;
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user :any ;
  userSubscription: Subscription;
  constructor(private userAuth:UserAuthService) { }
  
  ngOnInit(): void {
    
      google.accounts.id.initialize({
      client_id:'687532687072-lql295877hkdma16e5o8aqc4vpmrlrq3.apps.googleusercontent.com',
      callback:(resp:any)=>{
        
        this.user=resp;
        console.log(resp)
        this.userAuth.googleSignIn(resp);
        
   
      }
       
    })

    this.userSubscription=this.userAuth.getUser().subscribe(user=>{
      this.user=user;
      const googlebtn=document.querySelector('#googlebtn');
      googlebtn.addEventListener('animationend',()=>{
        if(this.user!=null){
          googlebtn.classList.add('displaynone');
        }
        else{
          googlebtn.classList.remove('displaynone');
        }
      })
      if(this.user==null){
        google.accounts.id.renderButton(document.getElementById("google-btn"),{
          theme: '',
          size: 'large',
          text:'continue_with',
          shape: 'pill',
          width: 30
        })}
      });
    
  }


logout(){
  google.accounts.id.disableAutoSelect();
  this.user=null;
  this.userAuth.logout();
  const googlebtn=document.querySelector('#googlebtn');
  googlebtn.classList.remove('displaynone');
}
      }
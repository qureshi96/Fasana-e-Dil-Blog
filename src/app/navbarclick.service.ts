import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarclickService {

  navbarclick:boolean;
  
constructor() {
  this.navbarclick=false;
 }
}


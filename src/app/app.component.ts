import { Component } from '@angular/core';
import { NavbarclickService } from './navbarclick.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  
  constructor(public navbarclick:NavbarclickService){

  }
  getnavbarclick(event){
    if(!this.navbarclick.navbarclick)
    {this.navbarclick.navbarclick=event;}
  }
 

}

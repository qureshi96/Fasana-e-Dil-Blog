import { Component, OnInit } from '@angular/core';
import { NavbarclickService } from './navbarclick.service';
import { Router } from '@angular/router';
import { BlogListService } from './blog-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular1';
  

  constructor(public navbarclick:NavbarclickService, private router:Router , private blogservice:BlogListService){
;

  }
  ngOnInit(): void {
   
     
      
  }
  getnavbarclick(event){
    if(!this.navbarclick.navbarclick)
    {this.navbarclick.navbarclick=event;}
  }
 

}

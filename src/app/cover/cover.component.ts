import { Component, OnInit,Input } from '@angular/core';
import { NavbarclickService } from '../navbarclick.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  @Input() id;
  @Input() blogtitle: string;
  @Input() blogsubtitle : string;
  @Input() ispostclicked:boolean;
  constructor(public navbarclick:NavbarclickService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Renderer2,Input } from '@angular/core';
import { Router } from "@angular/router";
import * as Aos from 'aos';
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';
import { NavbarclickService } from '../navbarclick.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
 blogslist: BlogPostsList=new BlogPostsList();
  blogs:BlogPostModel[]= [];
  ispostclicked:boolean=false;

  constructor(private renderer: Renderer2,public navbarclick:NavbarclickService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    Aos.init();
  this.blogs=this.blogslist.blogsList;

  }
  public getPostClick(data){
    this.ispostclicked=data;
  }
}

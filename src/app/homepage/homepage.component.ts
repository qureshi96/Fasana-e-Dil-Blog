import { Component, OnInit, Renderer2,Input } from '@angular/core';
import { Router } from "@angular/router";
import * as Aos from 'aos';
import { BlogListService } from '../blog-list.service';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  blogs:BlogPostModel[]= [];
  ispostclicked:boolean=false;
  isallpostsclicked:boolean=false;
  postindex=0;

  constructor(private renderer: Renderer2,public navbarclick:NavbarclickService, public bloglist:BlogListService,private router:Router) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    Aos.init({
      once:true
    });
    setTimeout(() => {
      this.blogs=this.bloglist.GetBlogList();
    }, 350);
  

  }
  public getPostClick(data){
    this.ispostclicked=data;
  }
  public allPostClick(){
    this.isallpostsclicked=true;
    setTimeout(() => {
      window.scroll({ 
        top: 0, 
        left: 0, 
        behavior:'auto' 
    });
    this.router.navigateByUrl('/posts');
   }, 650);
  }
   public getindex(event){
    this.postindex=event;
  }  
}

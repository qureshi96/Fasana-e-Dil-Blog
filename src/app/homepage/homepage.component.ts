import { Component, OnInit, Renderer2,Input, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import * as Aos from 'aos';
import { BehaviorSubject, Subscription } from 'rxjs';
import { BlogListService } from '../blog-list.service';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,OnDestroy {
  public blogs : BlogPostModel[];
  ispostclicked:boolean=false;
  isallpostsclicked:boolean=false;
  postindex=0;
  dataSubscription: Subscription;
  

  constructor(private renderer: Renderer2,public navbarclick:NavbarclickService, public bloglist:BlogListService,private router:Router,
   ) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
    // setTimeout(() => {
    //   this.blogs=this.bloglist.GetBlogList();
    // }, 1000);
    
  }
  ngOnDestroy(): void {
   
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); }
  }

  ngOnInit(): void {
    Aos.init({
      once:true
    });
  
    this.dataSubscription = this.bloglist.dataListObservable.subscribe(
      (data) => {
        this.blogs = data;
      }
    );

    this.bloglist.loadInitialData().catch((error) => {
      console.error('Error loading data:', error);
    });   
      
    
    

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

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Subscription } from 'rxjs';
import { BlogListService } from '../blog-list.service';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  blogs: BlogPostModel[]=[];
  ispostclicked:boolean=false;
  postindex=0;
  dataSubscription : Subscription;

  constructor(public navbarclick:NavbarclickService,public bloglist:BlogListService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    Aos.init({
      once:true
    })
  
    this.dataSubscription = this.bloglist.dataListObservable.subscribe(
      (data) => {
        this.blogs = data;
      }
    );

    this.bloglist.loadInitialData().catch((error) => {
      console.error('Error loading data:', error);
    });   

  }

  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); }
  }
  public getindex(event){
    this.postindex=event;
  }
  public getPostClick(data){
    this.ispostclicked=data;
  }

}

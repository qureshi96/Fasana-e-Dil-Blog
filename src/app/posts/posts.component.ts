import { Component, Input, OnInit } from '@angular/core';
import { BlogListService } from '../blog-list.service';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogs:BlogPostModel[]= [];
  ispostclicked:boolean=false;
  postindex=0;
  constructor(public navbarclick:NavbarclickService,public bloglist:BlogListService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    this.blogs=this.bloglist.GetBlogList();

  }
  public getindex(event){
    this.postindex=event;
  }
  public getPostClick(data){
    this.ispostclicked=data;
  }

}

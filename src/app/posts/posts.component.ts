import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';
import { NavbarclickService } from '../navbarclick.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogslist: BlogPostsList=new BlogPostsList();
  blogs:BlogPostModel[]= [];
  ispostclicked:boolean=false;
  constructor(public navbarclick:NavbarclickService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    this.blogs=this.blogslist.blogsList;

  }
  public getPostClick(data){
    this.ispostclicked=data;
  }

}

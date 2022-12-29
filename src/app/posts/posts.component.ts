import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  blogslist: BlogPostsList=new BlogPostsList();
  blogs:BlogPostModel[]= [];
  ispostclicked:boolean=false;
  constructor() { }

  ngOnInit(): void {
    this.blogs=this.blogslist.blogsList;

  }
  public getPostClick(data){
    this.ispostclicked=data;
  }

}

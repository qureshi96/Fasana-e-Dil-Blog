import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
blog: BlogPostsList=new BlogPostsList();
content:string="";

  constructor() {
    
   }

  ngOnInit(): void {
    this.content = this.blog.blogsList[0].content;
  }

}

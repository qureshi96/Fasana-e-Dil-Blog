import { Injectable } from '@angular/core';
import { BlogPostModel } from './data/blogPostModel';
import { Id_0_EdinburghLife } from './data/Id_0_EdinburghLife';
import { Id_1_Cricket } from './data/Id_1_Cricket';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {
  blogsList : BlogPostModel[]= [];
  obj:any;
  constructor() { 
    this.obj=new Id_0_EdinburghLife
    this.blogsList[0]=this.obj.blogPost;
    this.obj=new Id_1_Cricket;
    this.blogsList[1]=this.obj.blogPost;
  }
  GetBlogList(){
    return this.blogsList;
  }
  GetBlogPost(index){
    return this.blogsList[index];
  }
}

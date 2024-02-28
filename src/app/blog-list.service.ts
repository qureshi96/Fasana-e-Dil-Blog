import { Injectable } from '@angular/core';
import { BlogPostModel } from './data/blogPostModel';

import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class BlogListService {
 
  blogsList : BlogPostModel[]= [];
  obj:BlogPostModel[];
  
  constructor(private db: AngularFireDatabase) { 
   
    this.db.list<BlogPostModel>('/BlogsList').valueChanges().subscribe(data=>{
      this.obj=data;
    });

    
  }
 
    
  
  GetBlogList(){
    
    this.blogsList=this.obj
    return this.blogsList;

  }
  GetBlogPost(index){
    this.blogsList=this.obj;
    return this.blogsList[index];
  }
}

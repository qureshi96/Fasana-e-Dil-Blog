import { Injectable } from '@angular/core';
import { BlogPostModel } from './data/blogPostModel';

import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  firebase  from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat'; // Assuming you're using AngularFireModule
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class BlogListService {
 
  blogsList : BlogPostModel[]= [];
  obj:BlogPostModel[];
  
  constructor(private db: AngularFireDatabase,private afAuth: AngularFireAuth) { 
   
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
  // async googleSignIn() {
  //   const provider = new firebase.auth.GoogleAuthProvider();
  //   try {
  //     const result = await this.afAuth.signInWithPopup(provider);
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(getAuth(), provider);
      // Use result.user here
      return result;
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }
}

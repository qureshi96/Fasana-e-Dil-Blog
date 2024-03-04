import { Injectable } from '@angular/core';
import { BlogPostModel } from './data/blogPostModel';

import { environment } from 'src/environments/environment';

import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  firebase  from 'firebase/app';
import { AngularFireModule } from '@angular/fire/compat'; // Assuming you're using AngularFireModule
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BlogListService {
 
  blogsList : BlogPostModel[]= [];
  private dataList = new BehaviorSubject<BlogPostModel[]>([]);
  public dataListObservable = this.dataList.asObservable();
 
  constructor(private db: AngularFireDatabase,private afAuth: AngularFireAuth) { 
   
  // setTimeout(() => {
  //   this.db.list<BlogPostModel>('/BlogsList').valueChanges().subscribe(data=>{
  //     this.blogsList=data;
  //   });
  // }, 1000);
    
  
 
    
    
  }
 
loadInitialData():Promise<void>{
  return new Promise((resolve,reject) =>{
    const dataRef= this.db.list<BlogPostModel>('/BlogsList').valueChanges();
    dataRef.subscribe(
      (data:any) =>{this.dataList.next(data);
            resolve();},
      error=> reject(error)
    );
  });

}

GetBlogList(){
   
    return this.dataList;

  }


GetBlogPost(index){
    
    return this.blogsList[index];
}
  
 
}

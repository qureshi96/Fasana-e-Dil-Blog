import { Injectable } from '@angular/core';
import { BlogPostModel } from './data/blogPostModel';
import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BlogListService {
 

  private dataList = new BehaviorSubject<BlogPostModel[]>([]);
  public dataListObservable = this.dataList.asObservable();
 
  constructor(private http:HttpClient) { 
   
  
  
 
    
    
  }
 
loadInitialData():Promise<void>{
   return new Promise((resolve,reject) =>{
this.http.get('https://fasana-e-dil-backend.onrender.com/getblogs').subscribe(
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
    
    return this.dataList[index];
}
  
 
}

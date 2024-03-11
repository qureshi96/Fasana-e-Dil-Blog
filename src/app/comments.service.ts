import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { CommentModel } from './data/commentModel';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentsService {

    private dataList = new BehaviorSubject<CommentModel[]>([]);
    public dataListObservable = this.dataList.asObservable();
  
  constructor(private http:HttpClient) { }

  loadComments(index):Promise<void>{
    return new Promise((resolve,reject) =>{
      this.http.get('https://fasana-e-dil-backend.onrender.com/getcomments/'+index).subscribe(
        (data:any) =>{this.dataList.next(data);
              resolve();},
        error=> reject(error)
      );
    });
  
  }

  postComment(commentdata:CommentModel){
   this.http.post('https://fasana-e-dil-backend.onrender.com/postcomment',commentdata).subscribe((res)=>{
    console.log(res);
    this.loadComments(commentdata.postid);
   })
  }
  deleteComment(comment:CommentModel){
    this.http.get('https://fasana-e-dil-backend.onrender.com/deletecomment/'+comment._id).subscribe((res)=>{
      console.log(res);
      this.loadComments(comment.postid);
    })
    
  }

}

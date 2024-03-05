import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { CommentModel } from './data/commentModel';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: CommentModel[]=[new CommentModel("This is sample comment","Usman Ahmed","https://lh3.googleusercontent.com/a/ACg8ocK9ejfsZjkZWDSTfzHuCGoZgY6CUe7X6tcbcEdJmnpPBmZK=s96-c",
    "usmanramses@gmail.com",new Date())];
    private dataList = new BehaviorSubject<CommentModel[]>([]);
    public dataListObservable = this.dataList.asObservable();
  
  constructor(private db:AngularFireDatabase) { }

  loadComments(index):Promise<void>{
    return new Promise((resolve,reject) =>{
      const dataRef= this.db.list<CommentModel[]>('/CommentsAndLikes/'+index+"/Comments").valueChanges();
      dataRef.subscribe(
        (data:any) =>{this.dataList.next(data);
              resolve();},
        error=> reject(error)
      );
    });
  
  }

  postComment(index, commentdata:CommentModel){
    this.db.list('/CommentsAndLikes/'+index+'/Comments').push(commentdata);
  }
  getCommentlist(){
    
  }

}

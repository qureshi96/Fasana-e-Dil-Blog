import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { CommentModel } from './data/commentModel';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private comments: CommentModel[]=[new CommentModel("This is sample comment","Usman Ahmed","https://lh3.googleusercontent.com/a/ACg8ocK9ejfsZjkZWDSTfzHuCGoZgY6CUe7X6tcbcEdJmnpPBmZK=s96-c",
    "usmanramses@gmail.com",new Date())];
  
  constructor() { }

  getComments():Observable<CommentModel[]>{
    return of(this.comments);
  }

}

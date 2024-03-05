import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommentsService } from '../comments.service';
import { CommentModel } from '../data/commentModel';
@Component({
  selector: 'app-commentslist',
  templateUrl: './commentslist.component.html',
  styleUrls: ['./commentslist.component.css']
})
export class CommentslistComponent implements OnInit {
  comments: CommentModel[] = [];
  commentsSubscription: Subscription;
 
  @Input() id;
  constructor(private commentsService:CommentsService) {

   }

  ngOnInit(): void {
    this.commentsService.loadComments(this.id).catch((error)=>{
      console.log("error loading comments:",error);
    });
    this.commentsSubscription=this.commentsService.dataListObservable.subscribe(
      (data) =>{
        this.comments=data;
      }
    );
    

  }

}

import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';
import { CommentModel } from '../data/commentModel';
@Component({
  selector: 'app-commentslist',
  templateUrl: './commentslist.component.html',
  styleUrls: ['./commentslist.component.css']
})
export class CommentslistComponent implements OnInit {
  comments: CommentModel[] = [];

  constructor(private commentsService:CommentsService) {

   }

  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments =>{
      this.comments=comments;
    });

  }

}

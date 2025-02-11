import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BlogPostModel } from '../data/blogPostModel';
import { Router } from '@angular/router';
import * as Aos from 'aos';
@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.html',
  styleUrls: ['./postpreview.component.css']
})
export class PostpreviewComponent implements OnInit {
@Input ()post: BlogPostModel = new BlogPostModel();
postclicked:boolean;
@Output() ispostclicked:EventEmitter<boolean> =new EventEmitter();
@Output() postindex:EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit(): void {
  Aos.init({
  })
   this.postclicked=false;

  }
  
 
public navigate():void{
this.postclicked=true;
this.ispostclicked.emit(this.postclicked);
this.postindex.emit(this.post.id);
  setTimeout(() => {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior:'auto' 
  });
   this.router.navigateByUrl("/post?id=" + this.post.id);
 }, 650);
 
}


}

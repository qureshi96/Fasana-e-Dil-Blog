import { Component, Input, OnInit } from '@angular/core';
import { BlogPostsList } from '../data/blogPostsList';
import { BlogPostModel } from '../data/blogPostModel';
import { Router } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-postpreview',
  templateUrl: './postpreview.component.html',
  styleUrls: ['./postpreview.component.css']
})
export class PostpreviewComponent implements OnInit {
@Input ()post: BlogPostModel = new BlogPostModel();
  constructor(private router: Router) { }

  ngOnInit(): void {
   AOS.init();

  }
public navigate():void{
 this.router.navigateByUrl("/post?id=" + this.post.id);

}
}

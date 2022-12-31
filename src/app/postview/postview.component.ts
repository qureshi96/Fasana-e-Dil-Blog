import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';
import * as Aos from 'aos';
import { NavbarclickService } from '../navbarclick.service';
@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit {
  params:any;
  id:any;
  querystring:string = "";
  blogpost: BlogPostModel = new BlogPostModel();
  blogslist:BlogPostsList = new BlogPostsList();
  constructor(private route: ActivatedRoute, private router: Router, public navbarclick:NavbarclickService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
  }

  ngOnInit(): void {
    Aos.init();
    this.querystring=this.router.url.toString().split("?")[1];
    this.params = new URLSearchParams(this.querystring);
    this.id=this.params.get("id");

    this.blogpost = this.blogslist.blogsList[this.id];
  
  }
  
  

}

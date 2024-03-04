import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';
import { BlogListService } from '../blog-list.service';
import { UserAuthService } from '../user-auth.service';
import { Subscription } from 'rxjs';
import * as Aos from 'aos';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.css']
})
export class PostviewComponent implements OnInit,OnDestroy {
  params:any;
  id:any;
  user:any =null;
 querystring:string = "";
 blogs: BlogPostModel[]=[];
  blogpost: BlogPostModel = new BlogPostModel();
  userSubscription: Subscription;
  dataSubscription: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, public navbarclick:NavbarclickService, public bloglist:BlogListService,
    public userAuth:UserAuthService) { 
    if(navbarclick.navbarclick){
      navbarclick.navbarclick=false;
    }
    this.querystring=this.router.url.toString().split("?")[1];
    this.params = new URLSearchParams(this.querystring);
    this.id=this.params.get("id");
   
    
      this.blogpost = this.bloglist.GetBlogPost(this.id);
    
    
  }
  

  ngOnInit(): void {
    Aos.init({
      once:true
    });

    this.dataSubscription = this.bloglist.dataListObservable.subscribe(
      (data) => {
        this.blogs = data;
      }
    );

    this.bloglist.loadInitialData().catch((error) => {
      console.error('Error loading data:', error);
    });   

    this.blogpost = this.blogs[this.id];
   
    this.userSubscription=this.userAuth.getUser().subscribe(user=>{
      this.user=user;
      });
      console.log(this.user);    }

  ngOnDestroy(): void {
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); }
  }
  
  

}



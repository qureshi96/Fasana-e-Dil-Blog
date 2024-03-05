import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogPostModel } from '../data/blogPostModel';
import { NavbarclickService } from '../navbarclick.service';
import { BlogListService } from '../blog-list.service';
import { UserAuthService } from '../user-auth.service';
import { ConnectableObservable, Subscription } from 'rxjs';
import * as Aos from 'aos';
import { User } from 'firebase/auth';
import { CommentModel } from '../data/commentModel';
import { CommentsService } from '../comments.service';


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
  comment:string="";

  
 
  constructor(private route: ActivatedRoute, private router: Router, public navbarclick:NavbarclickService, public bloglist:BlogListService,
    public userAuth:UserAuthService, public commentservice:CommentsService) { 
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
     
      this.commentboxtoggle();
      });
      //console.log(this.user);   
     }

  ngOnDestroy(): void {
    if(this.userSubscription){
      this.userSubscription.unsubscribe();
    }
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe(); }
  }
  commentboxtoggle(){
    const commentbox=document.querySelector('#commentbox');
    const commentlist=document.querySelector('#commentlist');
    if(this.user!=null){
      
      commentbox.classList.remove('animate__fadeOutUp');
      commentbox.classList.remove('displaynone');
      commentbox.classList.add('animate__fadeInDown');
    }
    else {
      commentbox.classList.remove('animate__fadeInDown');
      commentbox.classList.add('animate__fadeOutUp');
      commentbox.addEventListener('animationend', () => {
        if(this.user==null){
          commentbox.classList.add('displaynone');
      }
      });
    }
  }
  logout(){
    
    this.userAuth.logout();
    
  }
  signin(){
    
    this.userAuth.googleSignIn() 
  }
  commentsubmit(){
    if(this.user!=null)
    {
      console.log(this.user)
      this.commentservice.postComment(this.id,new CommentModel(this.comment,this.user.displayName,this.user.photoURL,this.user.email,new Date()));
    }
  }

}



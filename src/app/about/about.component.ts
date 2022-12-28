import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BlogPostModel } from '../data/blogPostModel';
import { BlogPostsList } from '../data/blogPostsList';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  para1 : string;
  para2 :string;

  constructor() {
    
   }

  ngOnInit(): void {
    this.para1="I am Usman, also currently being referred to as Uzzie by some people here in Edinburgh."
    +"I would describe myself as an ambivert (introvert in most situations) and a professional procrastinator," 
    +"with 150% brain efficiency an hour before the deadline (too late!). "
    +"Growing up in a small town in Pakistan, I wanted to be an Archaeologist because it was the coolest word I read in the history book. However, I have ended up being quite the opposite, a struggling "
    +"Computer Scientist.";
    this.para2="I like to walk, sit in cafes, watch people, take symmetrical photos, and overthink. I have been living in different places during last 10 years."
    +"Each time I left a place, I left a part of me there and took a part of that place with me. My late maternal grandfather owned a bookshop in Multan.";
  }

}

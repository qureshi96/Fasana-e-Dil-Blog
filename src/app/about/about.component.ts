import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import * as Aos from 'aos';
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
  para3: string;
  constructor() {
    
   }

  ngOnInit(): void {
    Aos.init();
    this.para1="I am Usman, also being referred to as Uzzie by some people here in Scotland. "
    +"Currently living in Edinburgh, striving to understand the northern accents, getting used to the taste of Cheese and Onion pasty from Greggs and "
    +"missing Kabab Karahi from Shehanshah Tikka House in Rawalpindi.";
    this.para2="I would describe myself as an ambivert (introvert in most situations) and a professional procrastinator," 
    +"with 150% brain efficiency an hour before the deadline (too late!). "
    +"Growing up in a small town in Pakistan, I wanted to be an Archaeologist because it was the coolest word I read in the history book. However, I have ended up being quite the opposite, a struggling "
    +"Computer Scientist.";
    this.para3="I like to walk, sit in cafes, watch people, take symmetrical photos, and overthink. I have been living in different places during last 10 years."
    +"Each time I left a place, I left a part of me there and took a part of that place with me. My late maternal grandfather owned a bookshop in Multan."
    +" When I was about 11, he introduced me to the famous Pakistani travel writer, Mustansar Hussain Tarrar, and I instantly fell in love with his travelogues. I have been trying to travel to new places and learn about different cultures, lifestyles and languages since then.";
  }

}

import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}

import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.progressInnerEl = this.elRef.nativeElement.querySelector
    //this.renderer.setStyle(document.body.header,)
  }

}

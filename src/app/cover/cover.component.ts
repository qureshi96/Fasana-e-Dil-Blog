import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {
  @Input() id;
  @Input() blogtitle: string;
  @Input() blogsubtitle : string;
  @Input() ispostclicked:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { IAddress } from '../person.interface';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() mainAddress!: IAddress;
  constructor() { 
    this.mainAddress ={
      street: "Default Street From Child ",
      suite: "Default Suite From Child ",
      city: "Default City From Child ",
      zipcode: 0 ,
  }
 

  }
  ngOnInit() {
  }

}

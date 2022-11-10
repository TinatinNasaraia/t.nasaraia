import { Component, VERSION , OnInit,  ViewChild, ElementRef} from '@angular/core';
import {IPerson} from './person.interface'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit   {
  name = 'Angular ' + VERSION.major;
  personData:IPerson;
  @ViewChild('statusElem') studentStatus! :ElementRef;
  constructor() { 
      this.personData={
        name: "Dennis Schulist",
          isStudent: false,
          email: "Karley_Dach@jasper.info",
          address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: 23505-1337,
          }
        }
      }
  
      
  ngOnInit() {
  }


  statusUpdate(){

    this.personData.isStudent= true;
  }
  statusDeactive(){
    
    this.personData.isStudent= false;
  }
   ngAfrerViewInit(): void {
  
     console.log(this.studentStatus.nativeElement.innerHTML)
   }
}




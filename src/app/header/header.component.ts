import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('text')
  heading:ElementRef;
  name:string="jayashree"
 
  callMe()
  {
    alert("I am Child Class Function")
  }
  
  changeText()
  {
    this.heading.nativeElement.innerHTML="Hello World...!"
    this.heading.nativeElement.style.color='red';
    console.log(this.heading);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons=[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}];
  constructor() { }

  
  
  ngOnInit() {
  }
  addButton(){
    var newButton={name: "" + (this.buttons.length+1) }
    this.buttons.push(newButton);
  }
 removeButton(){
   this.buttons.pop();
  
 }
}

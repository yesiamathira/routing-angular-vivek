import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  button = {name:''}
  buttons=[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}]
  constructor() { }

  
  
  
  addButton(){
    var newButton=({name: "" + (this.buttons.length+1) });
    this.buttons.push(newButton);
  }
//  removeButton(){
//    this.buttons.pop();
  
//  }
removeButton(name1){
  console.log('button',name1)
for(var i = 0;i<this.buttons.length;i++){
  if(this.buttons[i].name==name1){
    this.buttons.splice(i,1);
  }
}

}
 
ngOnInit() {
}

}
//  {name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"}
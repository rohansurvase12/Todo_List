import { Component, EventEmitter, Output } from '@angular/core';
import { TODO } from 'src/app/todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent {

  title: String = "";
  desc : String = "";
  @Output() addtodo :  EventEmitter<TODO> = new EventEmitter(); 
  
  onSubmit(){
    const todo = new TODO(this.title, this.desc);  
    if(this.title != "" && this.desc != "") 
    this.addtodo.emit(todo)
    // this.title = ""
    // this.desc = ""
   console.log(this.title);
   console.log(this.desc)
  }
}

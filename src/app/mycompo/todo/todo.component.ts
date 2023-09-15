
import { Component, Input, Output , EventEmitter } from '@angular/core';
import{ TODO } from 'D:/Angular/todo2/src/app/todo'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() title : String = "";
  @Input() desc : String = "";
  @Input()todo : TODO = new TODO("" , "");
  @Output() delete :  EventEmitter<TODO> = new EventEmitter(); 
  @Output() checkbox :  EventEmitter<TODO> = new EventEmitter(); 


  onClick(){
    this.delete.emit(this.todo)
    console.log(this.todo)
  }
  onCheckbox(){
   
     this.checkbox.emit(this.todo)
      console.log(this.todo.active)
    
  }
   
}

import { Component } from '@angular/core';
import { TODO } from 'src/app/todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'TodoList !';
  todo: TODO[];
  constructor(){
    const localItem = localStorage.getItem("todos");
    if (localItem != null) {
       this.todo = JSON.parse(localItem);
    }else{
      this.todo = []
    }
   
  }

  deletingTodo(todo : TODO){
    const index  = this.todo.indexOf(todo);
    this.todo.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todo))
  }
  addingTodo(todo : TODO){
    this.todo.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todo))
  }
  checkingBox(todo : TODO){
    const index  = this.todo.indexOf(todo);
    this.todo[index].active =  !this.todo[index].active
    localStorage.setItem("todos", JSON.stringify(this.todo))
  }
}

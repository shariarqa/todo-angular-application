import { Component, OnInit } from '@angular/core';
import {TodoDataService} from '../service/data/todo-data.service';
import {Router} from "@angular/router";

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date

  ) {

  }

}

@Component({
  selector: 'app-listodo',
  templateUrl: './listodo.component.html',
  styleUrls: ['./listodo.component.css']
})


export class ListodoComponent implements OnInit {

  todos: Todo[];
  message: string;

  constructor(

    private todoservice: TodoDataService,
    private router: Router

  ) { }

  ngOnInit() {
    this.refreshTodos();

  }

  refreshTodos(){
    this.todoservice.retriveAllTodos('Rana').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    );
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoservice.deleteTodo('Rana', id).subscribe(

      response => {
        console.log(response);
        this.message = `Delete of Todo ${id}Successful`;
        this.refreshTodos();
      }

    );
  }

  updateTodo(id){
    console.log(`update ${id}`)
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])


  }

}

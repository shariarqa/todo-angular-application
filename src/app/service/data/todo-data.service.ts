import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../listodo/listodo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retriveAllTodos(username: string) {

    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);



  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/delete/users/${username}/todos/${id}`)
  }

  retriveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }

  putTodo(username, id, todo){
    return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo)
  }

  postTodo(username, todo){
    return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo)
  }



}

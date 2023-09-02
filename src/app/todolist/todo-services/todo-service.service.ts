import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoServiceService {
  todos: string[] = [];

  addTask(task: string) {
    this.todos.push(task);
  }

  getTasks() {
    return this.todos;
  }

  markAsCompleted(index: number) {
    this.todos.splice(index, 1);
  }

  constructor() {}
}

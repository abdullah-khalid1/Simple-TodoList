import { Component } from '@angular/core';
import { TodoServiceService } from './todo-services/todo-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  newTask = '';
  tasks: string[] = [];

  constructor(private todoService: TodoServiceService) {}

  addTask() {
    this.todoService.addTask(this.newTask);
    this.newTask = '';
    this.tasks = this.todoService.getTasks();
  }

  markAsCompleted(index: number) {
    this.todoService.markAsCompleted(index);
    this.tasks = this.todoService.getTasks();
  }
}

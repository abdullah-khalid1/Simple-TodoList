import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoServiceService } from '../todo-services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  providers: [TodoServiceService],
})
export class TodoItemComponent {
  @Input() task: string = '';
  @Output() markAsCompleted = new EventEmitter<void>();
}

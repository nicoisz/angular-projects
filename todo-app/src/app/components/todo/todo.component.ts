import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  title:string = "Todo APP";
  todos: Array<any> | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

}

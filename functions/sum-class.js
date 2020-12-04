class TodoList {
  constructor() {
    this.todoList = [];
  }
  
  getList() {
    return this.todoList;
  }
  
  addTodo(todo) {
    this.todoList.push(todo);
  }
}

module.exports = TodoList;


const TodoList = require('../functions/sum-class');

test('使用 TodoList 的 addTodo 加入的事項 \
      可以從 getList 中取出', () => {
  // Arrange
  const todo = new TodoList();
  const expected = ['first'];
  // Act
  todo.addTodo('first');
  // Assert
  expect(todo.getList()).toEqual(expected);
});


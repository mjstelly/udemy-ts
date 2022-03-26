import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logTodo = (todo: Todo) => {
  const { id, title, completed } = todo
  console.log(`
  The Todo ID is: ${id}
  Has a title of: ${title}
  Is it completed?: ${completed}
  `)
}

axios.get(url).then(response => {
  const todo = response.data as Todo
  logTodo(todo)

})

import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interfaces in ts are meant to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
})

// annotations
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The TODO with ID: ${id}
    Has a title of ${title}
    Is it completed? ${completed}
  `)
}

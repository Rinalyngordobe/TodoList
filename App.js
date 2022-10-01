import "./App.css";
import { useState} from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  const [showForm, setShowForm] = useState(true)
  const [todos, setTodos] = useState([
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = (text, description, date) => {
    const id = todos.length + 1;
    const newTodo = { id, text, description, date };
   setTodos([...todos, newTodo]);
  };

  return (
    <div className="App">
      <p class="h1 text-center mt-3 mb-4 pb-3 text-primary">
              My Todo-List
            </p>
      <Header title="App Todo" addTodo = {() => setShowForm(!showForm)} showForm={showForm}/>
      {showForm ? <AddTodo onAdd={addTodo}/>:''}
     {todos.length > 0 ?  <Todos todos={todos} onDelete={deleteTodo} />:<p> </p>}
    </div>
  );
}

export default App;

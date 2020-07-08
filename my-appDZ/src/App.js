import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "./componets/ColoredTile";
import Context from './Context';
import FirstDz from './componets/FirstDz'
import InputSubmit from './componets/InputSubmit';
import ListCC from "./componets/List CC";
import ListFC from "./componets/List FC";
import TitleFC from "./componets/Title FC.js";
import TitleCC from "./componets/Title CC.js";
import TodoList from './Todo/TodoList';
import AddTodo from "./Todo/AddTodo";

function App() {

  const [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: 'Buy bread' },
    { id: 2, completed: false, title: 'Buy oil' },
    { id: 3, completed: false, title: 'Buy milk' },
  ])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const editTodo = (id, valueTodo) => {
    const updateTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, title: valueTodo } : todo
    )
    setTodos(updateTodos)
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <BrowserRouter>
          <div className='marginTop'>
            <Link className='linkColor' to='/FirstDz'>Dz First (React componets)</Link>
          </div>
          <div className='lincMergin'>
            <Link className='linkColor' to='/DzSecond'>Dz Second (Todo list)</Link>
          </div>

          <Switch>
            <Route path='/FirstDz'>
              <FirstDz title='React componets' />
            </Route>

            <Route path='/DzSecond'>
              <h1 className='startCenter'>Todo list</h1>
              <AddTodo onCreate={addTodo} />
              {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} editTodo={editTodo} /> :
                <h3 className='startCenter'>No todos !</h3>}
            </Route>

            <Route path='/TitleFC'>
              <TitleFC title='Functional component - Title' />
            </Route>

            <Route path='/ListFC'>
              <ListFC title='Functional component - List'
                arr={['A', 'B', 'C']} isOrdered={false} />
            </Route>

            <Route path='/TitleCC'>
              <TitleCC title='Class component - Title' />
            </Route>

            <Route path='/ListCC'>
              <ListCC title='Class component - List' />
            </Route>

            <Route path='/ColoredTitle'>
              <Button
                title='Color title'
                titleButtonBlack='Black' classNameBlack='black'
                titleButtonRed='Red' classNameRed='red'
                titleButtonGreen='Green' classNameGreen='green'
              />
            </Route>

            <Route path='/InputSubmit'>
              <InputSubmit />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </Context.Provider>
  );
}

export default App;

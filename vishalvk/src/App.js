import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from 'react';
function App() {

  const onDelete = (todo) =>{
    console.log("I am on delete of todo", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));

  }

  const addTodo=(title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno = todos[todos.length-1].sno + 1;
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);

  }
  const [todos, setTodos] = useState([

    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy some goods"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "Go to the mall and buy some cloths"
    },
    {
      sno: 3,
      title: "Go to the bank",
      desc: "Go to bank and withdraw some money"
    },
  ]);
  return (
    <>
      <Header title="Navi" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos}  onDelete = {onDelete}/>
      <Footer/>
    </>
  );
}

export default App;



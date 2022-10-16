import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todolist, setTodoList] = useState([]);
  const [todo, setTodo] = useState('')
  const [click, setClick] = useState(false)
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // setTodoList(localStorage.getItem('list'))
    getItems();
  }, [])

  function getItems(){
    var a = localStorage.getItem('list')
    // console.log(a);
    JSON.parse(a)
    // console.log(a[0])
    // setTodoList(a)
  }

  function changeStyle(input){
    document.getElementById(input).style.cssText = 'background-color: red; color: white; font-size: 44px';
  }
  // console.log(todolist)
  // Todo list
  // add features
  //submit button
  // click on it to highlight (maybe change css or add custom class on it)
  return (
    <div className="App">
      <input type="text" onInput={(e) => {
        setTodo(e.target.value)
        console.log(todo)
      }} value={todo}/>
      <button onClick={() => {
        todolist.push(todo)
        setTodoList([...todolist])
        localStorage.setItem('list', todolist)
        // setTodoList(...[todo])
        // setTodoList(...[todo])
        console.log(todolist)
      }}>Add</button>



     {todolist.map((el, index) => (
       <div key={index} id={index} className={index === selected ? 'background2' : 'background'} onClick={() => {
          setSelected(index);
      }}>
        <p>{el}</p>
       </div>
     ))}
    </div>
  );
}

export default App;

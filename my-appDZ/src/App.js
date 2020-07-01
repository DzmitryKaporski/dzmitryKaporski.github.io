import React from "react";
import "./App.css";
import Button from "./componets/ColoredTile";
import InputSubmit from './componets/InputSubmit';
import ListCC from "./componets/List CC";
import ListFC from "./componets/List FC";
import TitleFC from "./componets/Title FC.js";
import TitleCC from "./componets/Title CC.js";
// import TodoApp from "./componets/ToDo.js";

function App() {
  return (
    <div className="App">
      <TitleFC title='Functional component' />
      <ListFC arr={['A', 'B', 'C']} isOrdered={false} />
      <hr></hr>
      <TitleCC title='Class component' />
      <ListCC />
      <hr></hr>
      <Button
        title='Color title'
        titleButtonBlack='Black' classNameBlack='black'
        titleButtonRed='Red' classNameRed='red'
        titleButtonGreen='Green' classNameGreen='green'
      />
      <hr></hr>
      <InputSubmit />
      {/* <TodoApp /> */}
    </div>
  );
}

export default App;

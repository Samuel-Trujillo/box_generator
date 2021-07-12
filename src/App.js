import './App.css';
import React, {useState} from 'react';
import Box from './components/Box';
import Form from './components/Form';

function App() {
  // creates an array called boxes
  const [boxes, setBoxesColors] = useState([])

  // passes through a color into newBox variable while appending it to the array
  const newBox = (newColor) => {
    setBoxesColors([...boxes,{color : newColor}]);
  }

  return (
    <div className="App">
      <Form makeNewBox = {newBox}/>
      {
        boxes.map((box,i) =>
        <Box color = {box.color} key={i}/>
        )
      }
    </div>
  );
}

export default App;


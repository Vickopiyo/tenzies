import { useState } from "react";
import Die from "./component/Die";
import uuid from "react-uuid";

function App() {   



  const [diceArr, setdiceArr] = useState(allNewDice());    

  function allNewDice() {
    const newDice = [];
    // Here a random number is created and pushed each time it loops thus an array of similLar number.A BUG!!!!
    // const randomNumber=  Math.ceil(Math.random()*6)
    for (let i = 0; i < 10; i++) {
      // Each it loops a random number is created because it calls the func in the push method.Later pushes an object
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: uuid(),
      });
    }
    return newDice;
  }

  function toogleDice(id) {   
         
     setdiceArr( prevdices => {   

    return   prevdices.map( eachDice => {            
         return  eachDice.id === id ? {...eachDice, isHeld: !eachDice.isHeld} : eachDice        
        } 
      )
     })    
  }    

  const diceElements = diceArr.map((dice) => {  

    return <Die key={dice.id} {...dice} toggle={() => toogleDice(dice.id)} />;  
  });

  function rollDice() {
    setdiceArr(allNewDice());
  }

  return (
    <div className="App">
      <main>
        <div className="die-container">{diceElements}</div>

        <button className="btn-roll" onClick={rollDice}>
          Roll
        </button>
      </main>
    </div>
  );
}

export default App;

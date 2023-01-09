import { useEffect, useState } from "react";
import Die from "./component/Die";
import uuid from "react-uuid";   
import Confetti from 'react-confetti'
function App() {    
    //  Array generated onload or Clicking New Game   
     const [diceArr, setdiceArr] = useState(allNewDice());      
  // Checks whether game is won or not          
     const [tenzies, setTenzies]= useState(false)      
  
         useEffect(()=> {          

         const allHeld = diceArr.every( dice => dice.isHeld) 
         const diceValue = diceArr[0].value
         const allDiceEqual = diceArr.every( dice =>  dice.value === diceValue  ) 
        
          if ( allHeld && allDiceEqual){         
             setTenzies(true)      
          }  else{
               
          }       
          },[diceArr])          
          
  
  function generateNewDie() {     

    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: uuid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    // Here a random number is created and pushed each time it loops thus an array of similLar number.A BUG!!!!
    // const randomNumber=  Math.ceil(Math.random()*6)
    for (let i = 0; i < 10; i++) {
      // Each it loops a random number is created because it calls the func in the push method.Later pushes an object
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function toogleDice(id) {         
    setdiceArr((prevdices) => {    
      return prevdices.map((eachDice) => {
        return eachDice.id === id
          ? { ...eachDice, isHeld: !eachDice.isHeld }
          : { ...eachDice };
      });
    });
  }

  const diceElements = diceArr.map((dice) => {
    return <Die key={dice.id} {...dice} toggle={() => toogleDice(dice.id)} />;     
  });       
        
  function rollDice() {        
                  
      if(!tenzies){     
        setdiceArr((oldDie) => {            
          return oldDie.map((die) => {
            return die.isHeld ? die : generateNewDie();
          });      
        });                
      } else{    

         setTenzies(false)
         setdiceArr(allNewDice())             
      }


  }       

  return (
    <div className="App">
      <main>   
        {tenzies && <Confetti  width={1000} height={800} />}   
        <h1 className="title">Tenzies</h1 >
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>                 
        <div className="die-container">{diceElements}</div>
        <button className="btn-roll" onClick={rollDice}>
          {tenzies ? "New Game" : "Roll"}
        </button>  
      </main>          
    </div>       
  );
}            

export default App;   


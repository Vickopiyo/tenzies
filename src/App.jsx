import { useState } from "react";
import Die from "./component/Die";

function App() {   

    const [diceArr, setdiceArr]= useState(allNewDice())    


  function allNewDice(){     

      const newDice = [] 
      // Here a random number is created and pushed each time it loops thus an array of similLar number.A BUG!!!!
      // const randomNumber=  Math.ceil(Math.random()*6)
     for(let i = 0 ; i < 10; i++ ) {   
    // Each it loops a random number is created because it calls the func in the push method
      newDice.push(Math.ceil(Math.random()*6))     
     }            

   return  newDice  
  }        

     
  
const diceElements = diceArr.map((dice, index)=> {
  return <Die  key= {index}  value = {dice}    />  
})

  return (
    <div className="App">
      <main>
        <div className="die-container">     
           {diceElements}   
        </div>   
        
        <button  className="btn-roll">Roll</button>
      
      </main>
    </div>
  );
}

export default App;

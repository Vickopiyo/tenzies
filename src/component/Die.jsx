import React from 'react'

const Die = (props) => {
  const style = {
    backgroundColor:   props.isHeld ? "#59E391" : "#f5f5f5"  

  }   
   
  return (         

    <div className='die-face'  style={style}  onClick={props.toggle}>                 
         <h3  className='die-num' >{props.value}</h3>            
      </div>  
  )
}    

export default Die
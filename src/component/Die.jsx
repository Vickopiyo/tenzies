import React from 'react'

const Die = (props) => {
  return (    
    <div className='die-face'>                
       <h3  className='die-num' >{props.value}</h3>         
    </div>     
  )
}    

export default Die
import React, { useState } from 'react';
import './Results.css'

function Results(props) {

  const [reset, setReset] = useState(false)

  const handleReset = (e) => {
    e.preventDefault()
    setReset(!reset)
    props.setBill("");
    props.setPeople("");
    props.setTip("")
  }

  return (
  
    <div className='results-container'>
      <div className='content'>
          <div className='text-container'>
              <div className='text'>
                  <label>Tip Amount</label>
                    <p>/ person</p>
              </div>
              <div className='text'>
                      <label>Total</label>
                      <p>/ person</p>
              </div>
          </div>
         
            {(isNaN(props.tipPerPerson) || isNaN(props.totalPerPerson)) 
            ?
            (<div className='number-container'>
            <p>$0</p>
            <p>$0</p>
            </div>)
            : (<div className='number-container'>
                  <p>${props.tipPerPerson}</p>
                  <p>${props.totalPerPerson}</p>
                </div>)}
          
      </div>
          <button className='reset'
          onClick={handleReset}>RESET</button>
    </div>
          

  
  )
}

export default Results
import React, {useState} from 'react';
import './Tips.css'

function Tips(props) {
  
  const [customTip, setCustomTip] = useState("")

  const handleCustomTip = (e) => {
    if(!isNaN(e.target.value)){
        props.setTip(e.target.value)
        setCustomTip(e.target.value)
    }
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    props.setTip(e.target.value)
    setCustomTip("")
  }
 

  return (
<div>
    <div className='tips-container'>
        <label className='tip-label'>Select Tip %</label>
        <div className='tip-input-container'>
            <button className='tip-button' value="5" onClick={handleClick}>5%</button>
            <button className='tip-button' value={10} onClick={handleClick}>10%</button>
            <button className='tip-button' value={15} onClick={handleClick}>15%</button>
            <button className='tip-button' value={20} onClick={handleClick}>20%</button>
            <button className='tip-button' value={25} onClick={handleClick}>25%</button>
            <input
                className='custom-tip'
                value={customTip}
                id='custom'
                type='tel'
                placeholder='Custom'
                onChange={handleCustomTip}
            />
        </div>       
    </div>
</div>
  )
}

export default Tips
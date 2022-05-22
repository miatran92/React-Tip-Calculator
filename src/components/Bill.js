import React from 'react';
import './Bill.css'

function Bill(props) {
  return (
    <div className='bill-container'>
        <label className='bill'>Bill</label>
        <input 
        className='bill-input'
        type='tel'
        id='bill'
        placeholder='$0.00'
        required
        value={props.bill}
        onChange={(e) => props.setBill(e.target.value)}
        />
    </div>
  )
}

export default Bill
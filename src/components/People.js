import React from 'react';
import './People.css'

function People(props) {

  return (
    <div className='people-container'>
        <label className='people'>Number of People</label>
        <input
        className='people-input'
        type='tel'
        value={props.people}
        onChange={(e) => props.setPeople(e.target.value)}
        
        />
    </div>
  )
}

export default People